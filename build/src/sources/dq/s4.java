package dq;

import android.text.method.PasswordTransformationMethod;
import android.view.View;
import dq.x3;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class s4 extends PasswordTransformationMethod {

    /* renamed from: d  reason: collision with root package name */
    private final String f21144d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a implements CharSequence {

        /* renamed from: d  reason: collision with root package name */
        private final String f21145d;

        /* renamed from: e  reason: collision with root package name */
        private final CharSequence f21146e;

        public a(String mask, CharSequence source) {
            Intrinsics.checkNotNullParameter(mask, "mask");
            Intrinsics.checkNotNullParameter(source, "source");
            this.f21145d = mask;
            this.f21146e = source;
        }

        public char a(int i10) {
            if (i10 < this.f21145d.length()) {
                x3 a10 = x3.f21192a.a(this.f21145d.charAt(i10));
                if (a10 instanceof x3.e) {
                    return ((x3.e) a10).b();
                }
            }
            return (char) 8226;
        }

        public int b() {
            return this.f21146e.length();
        }

        @Override // java.lang.CharSequence
        public final /* bridge */ char charAt(int i10) {
            return a(i10);
        }

        @Override // java.lang.CharSequence
        public final /* bridge */ int length() {
            return b();
        }

        @Override // java.lang.CharSequence
        public CharSequence subSequence(int i10, int i11) {
            return this.f21146e.subSequence(i10, i11);
        }
    }

    public s4(String mask) {
        Intrinsics.checkNotNullParameter(mask, "mask");
        this.f21144d = mask;
    }

    @Override // android.text.method.PasswordTransformationMethod, android.text.method.TransformationMethod
    public CharSequence getTransformation(CharSequence charSequence, View view) {
        if (charSequence == null) {
            return "";
        }
        return new a(this.f21144d, charSequence);
    }
}
