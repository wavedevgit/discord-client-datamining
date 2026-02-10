package gq;

import android.text.method.PasswordTransformationMethod;
import android.view.View;
import gq.x3;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class s4 extends PasswordTransformationMethod {

    /* renamed from: d  reason: collision with root package name */
    private final String f24706d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a implements CharSequence {

        /* renamed from: d  reason: collision with root package name */
        private final String f24707d;

        /* renamed from: e  reason: collision with root package name */
        private final CharSequence f24708e;

        public a(String mask, CharSequence source) {
            Intrinsics.checkNotNullParameter(mask, "mask");
            Intrinsics.checkNotNullParameter(source, "source");
            this.f24707d = mask;
            this.f24708e = source;
        }

        public char a(int i10) {
            if (i10 < this.f24707d.length()) {
                x3 a10 = x3.f24754a.a(this.f24707d.charAt(i10));
                if (a10 instanceof x3.e) {
                    return ((x3.e) a10).b();
                }
            }
            return (char) 8226;
        }

        public int b() {
            return this.f24708e.length();
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
            return this.f24708e.subSequence(i10, i11);
        }
    }

    public s4(String mask) {
        Intrinsics.checkNotNullParameter(mask, "mask");
        this.f24706d = mask;
    }

    @Override // android.text.method.PasswordTransformationMethod, android.text.method.TransformationMethod
    public CharSequence getTransformation(CharSequence charSequence, View view) {
        if (charSequence == null) {
            return "";
        }
        return new a(this.f24706d, charSequence);
    }
}
