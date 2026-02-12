package af;

import com.google.android.gms.common.api.Status;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements Runnable {

    /* renamed from: i  reason: collision with root package name */
    private static final lf.a f760i = new lf.a("RevokeAccessOperation", new String[0]);

    /* renamed from: d  reason: collision with root package name */
    private final String f761d;

    /* renamed from: e  reason: collision with root package name */
    private final gf.p f762e = new gf.p(null);

    public f(String str) {
        this.f761d = hf.q.f(str);
    }

    public static ff.g a(String str) {
        if (str == null) {
            return ff.h.a(new Status(4), null);
        }
        f fVar = new f(str);
        new Thread(fVar).start();
        return fVar.f762e;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Status status = Status.f14454s;
        try {
            String str = this.f761d;
            HttpURLConnection httpURLConnection = (HttpURLConnection) new URL("https://accounts.google.com/o/oauth2/revoke?token=" + str).openConnection();
            httpURLConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            int responseCode = httpURLConnection.getResponseCode();
            if (responseCode == 200) {
                status = Status.f14452q;
            } else {
                f760i.b("Unable to revoke access!", new Object[0]);
            }
            lf.a aVar = f760i;
            aVar.a("Response Code: " + responseCode, new Object[0]);
        } catch (IOException e10) {
            f760i.b("IOException when revoking access: ".concat(String.valueOf(e10.toString())), new Object[0]);
        } catch (Exception e11) {
            f760i.b("Exception when revoking access: ".concat(String.valueOf(e11.toString())), new Object[0]);
        }
        this.f762e.setResult(status);
    }
}
