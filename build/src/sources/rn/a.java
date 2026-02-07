package rn;

import android.animation.FloatEvaluator;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends FloatEvaluator {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f49048a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f49049b;

    /* renamed from: c  reason: collision with root package name */
    private Number f49050c;

    /* renamed from: d  reason: collision with root package name */
    private Number f49051d;

    public a(Function1 startValueProvider, Function1 endValueProvider) {
        Intrinsics.checkNotNullParameter(startValueProvider, "startValueProvider");
        Intrinsics.checkNotNullParameter(endValueProvider, "endValueProvider");
        this.f49048a = startValueProvider;
        this.f49049b = endValueProvider;
    }

    private final Number a(Number number) {
        if (this.f49051d == null) {
            this.f49051d = (Number) this.f49049b.invoke(number);
        }
        return this.f49051d;
    }

    private final Number b(Number number) {
        if (this.f49050c == null) {
            this.f49050c = (Number) this.f49048a.invoke(number);
        }
        return this.f49050c;
    }

    /* JADX WARN: Can't rename method to resolve collision */
    @Override // android.animation.TypeEvaluator
    public Float evaluate(float f10, Number number, Number number2) {
        Number b10 = b(number);
        Number a10 = a(number2);
        if (b10 == null || a10 == null) {
            return null;
        }
        return super.evaluate(f10, b10, a10);
    }
}
