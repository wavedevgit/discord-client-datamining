package ze;

import com.google.android.gms.common.api.Status;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements Runnable {

    /* renamed from: i  reason: collision with root package name */
    private static final kf.a f55513i = new kf.a("RevokeAccessOperation", new String[0]);

    /* renamed from: d  reason: collision with root package name */
    private final String f55514d;

    /* renamed from: e  reason: collision with root package name */
    private final ff.p f55515e = new ff.p(null);

    public f(String str) {
        this.f55514d = gf.q.f(str);
    }

    public static ef.g a(String str) {
        if (str == null) {
            return ef.h.a(new Status(4), null);
        }
        f fVar = new f(str);
        new Thread(fVar).start();
        return fVar.f55515e;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Status status = Status.f13781s;
        try {
            String str = this.f55514d;
            HttpURLConnection httpURLConnection = (HttpURLConnection) new URL("https://accounts.google.com/o/oauth2/revoke?token=" + str).openConnection();
            httpURLConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            int responseCode = httpURLConnection.getResponseCode();
            if (responseCode == 200) {
                status = Status.f13779q;
            } else {
                f55513i.b("Unable to revoke access!", new Object[0]);
            }
            kf.a aVar = f55513i;
            aVar.a("Response Code: " + responseCode, new Object[0]);
        } catch (IOException e10) {
            f55513i.b("IOException when revoking access: ".concat(String.valueOf(e10.toString())), new Object[0]);
        } catch (Exception e11) {
            f55513i.b("Exception when revoking access: ".concat(String.valueOf(e11.toString())), new Object[0]);
        }
        this.f55515e.setResult(status);
    }
}
