package fq;

import android.text.InputFilter;
import android.text.Spanned;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u implements InputFilter {

    /* renamed from: a  reason: collision with root package name */
    private final int f23632a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f23633b = qr.l.a(new Function0() { // from class: fq.t
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            Pattern c10;
            c10 = u.c(u.this);
            return c10;
        }
    });

    public u(int i10) {
        this.f23632a = i10;
    }

    private final Pattern b() {
        Object value = this.f23633b.getValue();
        Intrinsics.checkNotNullExpressionValue(value, "getValue(...)");
        return (Pattern) value;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Pattern c(u uVar) {
        int i10 = uVar.f23632a;
        return Pattern.compile("-?[0-9]*+((\\.[0-9]{0," + i10 + "})?)||(\\.)?");
    }

    @Override // android.text.InputFilter
    public CharSequence filter(CharSequence source, int i10, int i11, Spanned dest, int i12, int i13) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(dest, "dest");
        CharSequence subSequence = source.subSequence(i10, i11);
        CharSequence subSequence2 = dest.subSequence(0, i12);
        CharSequence subSequence3 = dest.subSequence(i13, dest.length());
        StringBuilder sb2 = new StringBuilder();
        sb2.append((Object) subSequence2);
        sb2.append((Object) subSequence);
        sb2.append((Object) subSequence3);
        Matcher matcher = b().matcher(StringsKt.I(sb2.toString(), ',', '.', false, 4, null));
        Intrinsics.checkNotNullExpressionValue(matcher, "matcher(...)");
        if (matcher.matches()) {
            return null;
        }
        if (source.length() == 0) {
            return dest.subSequence(i12, i13);
        }
        return "";
    }
}
