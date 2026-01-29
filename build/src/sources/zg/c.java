package zg;

import android.animation.TypeEvaluator;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements TypeEvaluator {

    /* renamed from: a  reason: collision with root package name */
    private static final c f55663a = new c();

    public static c b() {
        return f55663a;
    }

    @Override // android.animation.TypeEvaluator
    /* renamed from: a */
    public Integer evaluate(float f10, Integer num, Integer num2) {
        int intValue = num.intValue();
        float f11 = ((intValue >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY) / 255.0f;
        int intValue2 = num2.intValue();
        float pow = (float) Math.pow(((intValue >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY) / 255.0f, 2.2d);
        float pow2 = (float) Math.pow(((intValue >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY) / 255.0f, 2.2d);
        float pow3 = (float) Math.pow((intValue & SetSpanOperation.SPAN_MAX_PRIORITY) / 255.0f, 2.2d);
        float pow4 = (float) Math.pow(((intValue2 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY) / 255.0f, 2.2d);
        float pow5 = pow3 + (f10 * (((float) Math.pow((intValue2 & SetSpanOperation.SPAN_MAX_PRIORITY) / 255.0f, 2.2d)) - pow3));
        return Integer.valueOf((Math.round(((float) Math.pow(pow + ((pow4 - pow) * f10), 0.45454545454545453d)) * 255.0f) << 16) | (Math.round((f11 + (((((intValue2 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY) / 255.0f) - f11) * f10)) * 255.0f) << 24) | (Math.round(((float) Math.pow(pow2 + ((((float) Math.pow(((intValue2 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY) / 255.0f, 2.2d)) - pow2) * f10), 0.45454545454545453d)) * 255.0f) << 8) | Math.round(((float) Math.pow(pow5, 0.45454545454545453d)) * 255.0f));
    }
}
