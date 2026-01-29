package pm;

import android.view.MotionEvent;
import android.view.ViewGroup;
import com.facebook.react.uimanager.JSPointerDispatcher;
import com.facebook.react.uimanager.events.EventDispatcher;
import ir.l;
import java.lang.reflect.Method;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends JSPointerDispatcher {

    /* renamed from: b  reason: collision with root package name */
    public static final a f46118b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f46119a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(ViewGroup viewGroup) {
        super(viewGroup);
        Intrinsics.checkNotNullParameter(viewGroup, "viewGroup");
        this.f46119a = l.b(new Function0() { // from class: pm.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Method g10;
                g10 = c.g();
                return g10;
            }
        });
    }

    private final Method e() {
        return (Method) this.f46119a.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Method g() {
        try {
            try {
                return JSPointerDispatcher.class.getMethod("handleMotionEvent", MotionEvent.class, EventDispatcher.class, Boolean.TYPE);
            } catch (NoSuchMethodException unused) {
                return null;
            }
        } catch (NoSuchMethodException unused2) {
            return JSPointerDispatcher.class.getMethod("handleMotionEvent", MotionEvent.class, EventDispatcher.class);
        }
    }

    public final void f(MotionEvent motionEvent, EventDispatcher eventDispatcher, boolean z10) {
        Method e10 = e();
        if (e10 != null) {
            if (pm.a.a(e10) == 3) {
                e10.invoke(this, motionEvent, eventDispatcher, Boolean.valueOf(z10));
            } else {
                e10.invoke(this, motionEvent, eventDispatcher);
            }
        }
    }
}
