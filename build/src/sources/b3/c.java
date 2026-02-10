package b3;

import androidx.dynamicanimation.animation.SpringAnimation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends e {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Function0 f6419b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Function1 f6420c;

        a(Function0 function0, Function1 function1) {
            this.f6419b = function0;
            this.f6420c = function1;
        }

        @Override // b3.e
        public float a() {
            return ((Number) this.f6419b.invoke()).floatValue();
        }

        @Override // b3.e
        public void b(float f10) {
            this.f6420c.invoke(Float.valueOf(f10));
        }
    }

    private static final e a(Function1 function1, Function0 function0) {
        return new a(function0, function1);
    }

    public static final SpringAnimation b(Function1 function1, Function0 function0, float f10) {
        e a10 = a(function1, function0);
        if (Float.isNaN(f10)) {
            return new SpringAnimation(a10);
        }
        return new SpringAnimation(a10, f10);
    }
}
