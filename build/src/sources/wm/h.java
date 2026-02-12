package wm;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.modules.statusbar.StatusBarModule;
import java.lang.reflect.Method;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.TypeIntrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private Object f52931a;

    /* renamed from: b  reason: collision with root package name */
    private Method f52932b;

    /* renamed from: c  reason: collision with root package name */
    private Method f52933c;

    /* renamed from: d  reason: collision with root package name */
    private Method f52934d;

    /* renamed from: e  reason: collision with root package name */
    private Method f52935e;

    /* renamed from: f  reason: collision with root package name */
    private Method f52936f;

    public h(ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        try {
            StatusBarModule.Companion companion = StatusBarModule.Companion;
            this.f52931a = StatusBarModule.class.getConstructor(ReactApplicationContext.class).newInstance(reactContext);
            Class cls = Boolean.TYPE;
            this.f52932b = StatusBarModule.class.getMethod("setHidden", cls);
            this.f52933c = StatusBarModule.class.getMethod("setColor", Double.TYPE, cls);
            this.f52934d = StatusBarModule.class.getMethod("setTranslucent", cls);
            this.f52935e = StatusBarModule.class.getMethod("setStyle", String.class);
            this.f52936f = StatusBarModule.class.getMethod("getConstants", null);
        } catch (Exception e10) {
            sm.a.f48172a.e(i.a(), "Failed to initialize StatusBarModule via reflection", e10);
        }
    }

    public final Map a() {
        Object obj;
        try {
            Method method = this.f52936f;
            if (method != null) {
                obj = method.invoke(this.f52931a, null);
            } else {
                obj = null;
            }
            if (!TypeIntrinsics.isMutableMap(obj)) {
                return null;
            }
            return (Map) obj;
        } catch (Exception e10) {
            sm.a.f48172a.e(i.a(), "Error invoking StatusBarModule.getConstants method", e10);
            return null;
        }
    }

    public final void b(double d10, boolean z10) {
        try {
            Method method = this.f52933c;
            if (method != null) {
                method.invoke(this.f52931a, Double.valueOf(d10), Boolean.valueOf(z10));
            }
        } catch (Exception e10) {
            sm.a.f48172a.e(i.a(), "Error invoking StatusBarModule.setColor method", e10);
        }
    }

    public final void c(String style) {
        Intrinsics.checkNotNullParameter(style, "style");
        try {
            Method method = this.f52935e;
            if (method != null) {
                method.invoke(this.f52931a, style);
            }
        } catch (Exception e10) {
            sm.a.f48172a.e(i.a(), "Error invoking StatusBarModule.setStyle method", e10);
        }
    }

    public final void d(boolean z10) {
        try {
            Method method = this.f52934d;
            if (method != null) {
                method.invoke(this.f52931a, Boolean.valueOf(z10));
            }
        } catch (Exception e10) {
            sm.a.f48172a.e(i.a(), "Error invoking StatusBarModule.setTranslucent method", e10);
        }
    }
}
