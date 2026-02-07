package u5;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a implements d {

    /* renamed from: d  reason: collision with root package name */
    private final HttpURLConnection f51285d;

    public a(HttpURLConnection httpURLConnection) {
        this.f51285d = httpURLConnection;
    }

    private String a(HttpURLConnection httpURLConnection) {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(httpURLConnection.getErrorStream()));
        StringBuilder sb2 = new StringBuilder();
        while (true) {
            try {
                String readLine = bufferedReader.readLine();
                if (readLine != null) {
                    sb2.append(readLine);
                    sb2.append('\n');
                } else {
                    try {
                        break;
                    } catch (Exception unused) {
                    }
                }
            } catch (Throwable th2) {
                try {
                    bufferedReader.close();
                } catch (Exception unused2) {
                }
                throw th2;
            }
        }
        bufferedReader.close();
        return sb2.toString();
    }

    @Override // u5.d
    public String F1() {
        try {
            if (isSuccessful()) {
                return null;
            }
            return "Unable to fetch " + this.f51285d.getURL() + ". Failed with " + this.f51285d.getResponseCode() + ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE + a(this.f51285d);
        } catch (IOException e10) {
            x5.d.d("get error failed ", e10);
            return e10.getMessage();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f51285d.disconnect();
    }

    @Override // u5.d
    public boolean isSuccessful() {
        try {
            if (this.f51285d.getResponseCode() / 100 != 2) {
                return false;
            }
            return true;
        } catch (IOException unused) {
            return false;
        }
    }

    @Override // u5.d
    public String p0() {
        return this.f51285d.getContentType();
    }

    @Override // u5.d
    public InputStream x0() {
        return this.f51285d.getInputStream();
    }
}
