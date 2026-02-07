package tm;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.modules.statusbar.StatusBarModule;
import java.lang.reflect.Method;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.TypeIntrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private Object f50813a;

    /* renamed from: b  reason: collision with root package name */
    private Method f50814b;

    /* renamed from: c  reason: collision with root package name */
    private Method f50815c;

    /* renamed from: d  reason: collision with root package name */
    private Method f50816d;

    /* renamed from: e  reason: collision with root package name */
    private Method f50817e;

    /* renamed from: f  reason: collision with root package name */
    private Method f50818f;

    public h(ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        try {
            StatusBarModule.Companion companion = StatusBarModule.Companion;
            this.f50813a = StatusBarModule.class.getConstructor(ReactApplicationContext.class).newInstance(reactContext);
            Class cls = Boolean.TYPE;
            this.f50814b = StatusBarModule.class.getMethod("setHidden", cls);
            this.f50815c = StatusBarModule.class.getMethod("setColor", Double.TYPE, cls);
            this.f50816d = StatusBarModule.class.getMethod("setTranslucent", cls);
            this.f50817e = StatusBarModule.class.getMethod("setStyle", String.class);
            this.f50818f = StatusBarModule.class.getMethod("getConstants", null);
        } catch (Exception e10) {
            pm.a.f45109a.e(i.a(), "Failed to initialize StatusBarModule via reflection", e10);
        }
    }

    public final Map a() {
        Object obj;
        try {
            Method method = this.f50818f;
            if (method != null) {
                obj = method.invoke(this.f50813a, null);
            } else {
                obj = null;
            }
            if (!TypeIntrinsics.isMutableMap(obj)) {
                return null;
            }
            return (Map) obj;
        } catch (Exception e10) {
            pm.a.f45109a.e(i.a(), "Error invoking StatusBarModule.getConstants method", e10);
            return null;
        }
    }

    public final void b(double d10, boolean z10) {
        try {
            Method method = this.f50815c;
            if (method != null) {
                method.invoke(this.f50813a, Double.valueOf(d10), Boolean.valueOf(z10));
            }
        } catch (Exception e10) {
            pm.a.f45109a.e(i.a(), "Error invoking StatusBarModule.setColor method", e10);
        }
    }

    public final void c(String style) {
        Intrinsics.checkNotNullParameter(style, "style");
        try {
            Method method = this.f50817e;
            if (method != null) {
                method.invoke(this.f50813a, style);
            }
        } catch (Exception e10) {
            pm.a.f45109a.e(i.a(), "Error invoking StatusBarModule.setStyle method", e10);
        }
    }

    public final void d(boolean z10) {
        try {
            Method method = this.f50816d;
            if (method != null) {
                method.invoke(this.f50813a, Boolean.valueOf(z10));
            }
        } catch (Exception e10) {
            pm.a.f45109a.e(i.a(), "Error invoking StatusBarModule.setTranslucent method", e10);
        }
    }
}
