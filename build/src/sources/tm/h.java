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
    private Object f50765a;

    /* renamed from: b  reason: collision with root package name */
    private Method f50766b;

    /* renamed from: c  reason: collision with root package name */
    private Method f50767c;

    /* renamed from: d  reason: collision with root package name */
    private Method f50768d;

    /* renamed from: e  reason: collision with root package name */
    private Method f50769e;

    /* renamed from: f  reason: collision with root package name */
    private Method f50770f;

    public h(ReactApplicationContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        try {
            StatusBarModule.Companion companion = StatusBarModule.Companion;
            this.f50765a = StatusBarModule.class.getConstructor(ReactApplicationContext.class).newInstance(reactContext);
            Class cls = Boolean.TYPE;
            this.f50766b = StatusBarModule.class.getMethod("setHidden", cls);
            this.f50767c = StatusBarModule.class.getMethod("setColor", Double.TYPE, cls);
            this.f50768d = StatusBarModule.class.getMethod("setTranslucent", cls);
            this.f50769e = StatusBarModule.class.getMethod("setStyle", String.class);
            this.f50770f = StatusBarModule.class.getMethod("getConstants", null);
        } catch (Exception e10) {
            pm.a.f45061a.e(i.a(), "Failed to initialize StatusBarModule via reflection", e10);
        }
    }

    public final Map a() {
        Object obj;
        try {
            Method method = this.f50770f;
            if (method != null) {
                obj = method.invoke(this.f50765a, null);
            } else {
                obj = null;
            }
            if (!TypeIntrinsics.isMutableMap(obj)) {
                return null;
            }
            return (Map) obj;
        } catch (Exception e10) {
            pm.a.f45061a.e(i.a(), "Error invoking StatusBarModule.getConstants method", e10);
            return null;
        }
    }

    public final void b(double d10, boolean z10) {
        try {
            Method method = this.f50767c;
            if (method != null) {
                method.invoke(this.f50765a, Double.valueOf(d10), Boolean.valueOf(z10));
            }
        } catch (Exception e10) {
            pm.a.f45061a.e(i.a(), "Error invoking StatusBarModule.setColor method", e10);
        }
    }

    public final void c(String style) {
        Intrinsics.checkNotNullParameter(style, "style");
        try {
            Method method = this.f50769e;
            if (method != null) {
                method.invoke(this.f50765a, style);
            }
        } catch (Exception e10) {
            pm.a.f45061a.e(i.a(), "Error invoking StatusBarModule.setStyle method", e10);
        }
    }

    public final void d(boolean z10) {
        try {
            Method method = this.f50768d;
            if (method != null) {
                method.invoke(this.f50765a, Boolean.valueOf(z10));
            }
        } catch (Exception e10) {
            pm.a.f45061a.e(i.a(), "Error invoking StatusBarModule.setTranslucent method", e10);
        }
    }
}
