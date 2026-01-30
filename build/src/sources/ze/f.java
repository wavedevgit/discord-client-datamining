package ze;

import com.google.android.gms.common.api.Status;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements Runnable {

    /* renamed from: i  reason: collision with root package name */
    private static final kf.a f55657i = new kf.a("RevokeAccessOperation", new String[0]);

    /* renamed from: d  reason: collision with root package name */
    private final String f55658d;

    /* renamed from: e  reason: collision with root package name */
    private final ff.p f55659e = new ff.p(null);

    public f(String str) {
        this.f55658d = gf.q.f(str);
    }

    public static ef.g a(String str) {
        if (str == null) {
            return ef.h.a(new Status(4), null);
        }
        f fVar = new f(str);
        new Thread(fVar).start();
        return fVar.f55659e;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Status status = Status.f14791s;
        try {
            String str = this.f55658d;
            HttpURLConnection httpURLConnection = (HttpURLConnection) new URL("https://accounts.google.com/o/oauth2/revoke?token=" + str).openConnection();
            httpURLConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            int responseCode = httpURLConnection.getResponseCode();
            if (responseCode == 200) {
                status = Status.f14789q;
            } else {
                f55657i.b("Unable to revoke access!", new Object[0]);
            }
            kf.a aVar = f55657i;
            aVar.a("Response Code: " + responseCode, new Object[0]);
        } catch (IOException e10) {
            f55657i.b("IOException when revoking access: ".concat(String.valueOf(e10.toString())), new Object[0]);
        } catch (Exception e11) {
            f55657i.b("Exception when revoking access: ".concat(String.valueOf(e11.toString())), new Object[0]);
        }
        this.f55659e.setResult(status);
    }
}
