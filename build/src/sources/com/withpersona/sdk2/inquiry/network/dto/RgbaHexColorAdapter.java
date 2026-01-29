package com.withpersona.sdk2.inquiry.network.dto;

import android.graphics.Color;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.squareup.moshi.f;
import com.squareup.moshi.z;
import java.util.Locale;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0019\u0010\u0004\u001a\u00020\u00052\n\b\u0001\u0010\u0006\u001a\u0004\u0018\u00010\u0007H\u0007¢\u0006\u0002\u0010\bJ\u0017\u0010\t\u001a\u0004\u0018\u00010\u00072\u0006\u0010\u0006\u001a\u00020\u0005H\u0007¢\u0006\u0002\u0010\n¨\u0006\u000b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/RgbaHexColorAdapter;", "", "<init>", "()V", "toJson", "", "rgba", "", "(Ljava/lang/Integer;)Ljava/lang/String;", "fromJson", "(Ljava/lang/String;)Ljava/lang/Integer;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class RgbaHexColorAdapter {
    @NotNull
    public static final RgbaHexColorAdapter INSTANCE = new RgbaHexColorAdapter();

    private RgbaHexColorAdapter() {
    }

    @f
    @RgbaHexColor
    public final Integer fromJson(@NotNull String rgba) {
        Long u10;
        Intrinsics.checkNotNullParameter(rgba, "rgba");
        String upperCase = StringsKt.k1(rgba).toString().toUpperCase(Locale.ROOT);
        Intrinsics.checkNotNullExpressionValue(upperCase, "toUpperCase(...)");
        String B0 = StringsKt.B0(upperCase, "#");
        int length = B0.length();
        if (length != 6) {
            if (length != 8 || (u10 = StringsKt.u(B0, 16)) == null) {
                return null;
            }
            long longValue = u10.longValue();
            return Integer.valueOf(Color.argb((int) (longValue & 255), (int) ((longValue >> 24) & 255), (int) ((longValue >> 16) & 255), (int) ((longValue >> 8) & 255)));
        }
        Integer s10 = StringsKt.s(B0, 16);
        if (s10 == null) {
            return null;
        }
        int intValue = s10.intValue();
        return Integer.valueOf(Color.rgb((intValue >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY, (intValue >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY, intValue & SetSpanOperation.SPAN_MAX_PRIORITY));
    }

    @z
    @NotNull
    public final String toJson(@RgbaHexColor Integer num) {
        throw new IllegalStateException("Should not be called");
    }
}
