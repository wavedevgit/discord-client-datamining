package b3;

import androidx.dynamicanimation.animation.SpringAnimation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: b3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0108a extends c {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Function0 f7151b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Function1 f7152c;

        C0108a(Function0 function0, Function1 function1) {
            this.f7151b = function0;
            this.f7152c = function1;
        }

        @Override // b3.c
        public float a() {
            return ((Number) this.f7151b.invoke()).floatValue();
        }

        @Override // b3.c
        public void b(float f10) {
            this.f7152c.invoke(Float.valueOf(f10));
        }
    }

    private static final c a(Function1 function1, Function0 function0) {
        return new C0108a(function0, function1);
    }

    public static final SpringAnimation b(Function1 setter, Function0 getter, float f10) {
        Intrinsics.checkParameterIsNotNull(setter, "setter");
        Intrinsics.checkParameterIsNotNull(getter, "getter");
        c a10 = a(setter, getter);
        if (Float.isNaN(f10)) {
            return new SpringAnimation(a10);
        }
        return new SpringAnimation(a10, f10);
    }
}
