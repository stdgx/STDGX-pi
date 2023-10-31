package br.com.fatec.stdgx.utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.util.stream.Stream;

import org.dhatim.fastexcel.reader.ReadableWorkbook;
import org.dhatim.fastexcel.reader.Row;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.util.StopWatch;

public class ReadExcel {

    public static void main(String[] args) throws IOException, JSONException {

        try (InputStream is = new FileInputStream("c:/temp/fastexcel-demo.xlsx"); ReadableWorkbook wb = new ReadableWorkbook(is)) {

            JSONObject json = new JSONObject();

            StopWatch watch = new StopWatch();
            watch.start();
            wb.getSheets().forEach(sheet -> {
                try (Stream<Row> rows = sheet.openStream()) {

                    rows.skip(1).forEach(r -> {
                        String key = r.getCellAsString(0).orElse(null);
                        BigDecimal value = r.getCellAsNumber(1).orElse(null);

                        try {
                            json.put(key, value);
                        } catch (JSONException e) {
                            throw new RuntimeException(e);
                        }
                    });

                } catch (Exception e) {
                    e.printStackTrace();
                }
                watch.stop();
                System.out.println("Processing time :: " + watch.getTotalTimeSeconds());
                System.out.println(json);
            });
        }
    }
}
