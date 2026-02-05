package rm;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.modules.statusbar.StatusBarModule;
import java.lang.reflect.Method;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.TypeIntrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private Object f48902a;

    /* renamed from: b  reason: collision with root package name */
    private Method f48903b;

    /* renamed from: c  reason: collision with root package name */
    private Method f48904c;

    /* renamed from: d  reason: collision with root package name */
    private Method f48905d;

    /* renamed from: e  reason: collision with root package name */
    private Method f48906e;

    /* renamed from: f  reason: collision with root package name */
    private Method f48907f;

    public h(ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        try {
            StatusBarModule.Companion companion = StatusBarModule.Companion;
            this.f48902a = StatusBarModule.class.getConstructor(ReactApplicationContext.class).newInstance(reactContext);
            Class cls = Boolean.TYPE;
            this.f48903b = StatusBarModule.class.getMethod("setHidden", cls);
            this.f48904c = StatusBarModule.class.getMethod("setColor", Double.TYPE, cls);
            this.f48905d = StatusBarModule.class.getMethod("setTranslucent", cls);
            this.f48906e = StatusBarModule.class.getMethod("setStyle", String.class);
            this.f48907f = StatusBarModule.class.getMethod("getConstants", null);
        } catch (Exception e10) {
            nm.a.f41373a.e(i.a(), "Failed to initialize StatusBarModule via reflection", e10);
        }
    }

    public final Map a() {
        Object obj;
        try {
            Method method = this.f48907f;
            if (method != null) {
                obj = method.invoke(this.f48902a, null);
            } else {
                obj = null;
            }
            if (!TypeIntrinsics.isMutableMap(obj)) {
                return null;
            }
            return (Map) obj;
        } catch (Exception e10) {
            nm.a.f41373a.e(i.a(), "Error invoking StatusBarModule.getConstants method", e10);
            return null;
        }
    }

    public final void b(double d10, boolean z10) {
        try {
            Method method = this.f48904c;
            if (method != null) {
                method.invoke(this.f48902a, Double.valueOf(d10), Boolean.valueOf(z10));
            }
        } catch (Exception e10) {
            nm.a.f41373a.e(i.a(), "Error invoking StatusBarModule.setColor method", e10);
        }
    }

    public final void c(String style) {
        Intrinsics.checkNotNullParameter(style, "style");
        try {
            Method method = this.f48906e;
            if (method != null) {
                method.invoke(this.f48902a, style);
            }
        } catch (Exception e10) {
            nm.a.f41373a.e(i.a(), "Error invoking StatusBarModule.setStyle method", e10);
        }
    }

    public final void d(boolean z10) {
        try {
            Method method = this.f48905d;
            if (method != null) {
                method.invoke(this.f48902a, Boolean.valueOf(z10));
            }
        } catch (Exception e10) {
            nm.a.f41373a.e(i.a(), "Error invoking StatusBarModule.setTranslucent method", e10);
        }
    }
}
