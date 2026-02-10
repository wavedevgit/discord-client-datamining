package jm;

import android.util.Log;
import com.facebook.react.bridge.Promise;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private Promise f30289a;

    /* renamed from: b  reason: collision with root package name */
    private String f30290b;

    /* renamed from: c  reason: collision with root package name */
    private final String f30291c;

    public h(String str) {
        this.f30291c = str;
    }

    private void f(Promise promise, String str) {
        promise.reject("ASYNC_OP_IN_PROGRESS", "Warning: previous promise did not settle and you attempted to overwrite it. You've called \"" + str + "\" while \"" + a() + "\" was already in progress and has not completed yet.");
    }

    private void g() {
        this.f30290b = null;
        this.f30289a = null;
    }

    public String a() {
        return this.f30290b;
    }

    public void b(Exception exc) {
        String str;
        if (exc.getLocalizedMessage() != null) {
            str = exc.getLocalizedMessage();
        } else if (exc.getMessage() != null) {
            str = exc.getMessage();
        } else {
            str = "unknown error";
        }
        d(this.f30290b, str, exc);
    }

    public void c(String str, String str2) {
        d(str, str2, null);
    }

    public void d(String str, String str2, Exception exc) {
        Promise promise = this.f30289a;
        if (promise == null) {
            Log.e(this.f30291c, "cannot reject promise because it's null");
            return;
        }
        g();
        promise.reject(str, str2, exc);
    }

    public void e() {
        c("OPERATION_CANCELED", "user canceled the document picker");
    }

    public void h(Object obj) {
        Promise promise = this.f30289a;
        if (promise == null) {
            Log.e(this.f30291c, "cannot resolve promise because it's null");
            return;
        }
        g();
        promise.resolve(obj);
    }

    public boolean i(Promise promise, String str) {
        if (this.f30289a != null) {
            f(promise, str);
            return false;
        }
        this.f30289a = promise;
        this.f30290b = str;
        return true;
    }
}
