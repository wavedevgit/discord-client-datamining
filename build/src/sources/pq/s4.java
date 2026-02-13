package pq;

import android.text.method.PasswordTransformationMethod;
import android.view.View;
import kotlin.jvm.internal.Intrinsics;
import pq.x3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class s4 extends PasswordTransformationMethod {

    /* renamed from: d  reason: collision with root package name */
    private final String f43666d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a implements CharSequence {

        /* renamed from: d  reason: collision with root package name */
        private final String f43667d;

        /* renamed from: e  reason: collision with root package name */
        private final CharSequence f43668e;

        public a(String mask, CharSequence source) {
            Intrinsics.checkNotNullParameter(mask, "mask");
            Intrinsics.checkNotNullParameter(source, "source");
            this.f43667d = mask;
            this.f43668e = source;
        }

        public char a(int i10) {
            if (i10 < this.f43667d.length()) {
                x3 a10 = x3.f43714a.a(this.f43667d.charAt(i10));
                if (a10 instanceof x3.e) {
                    return ((x3.e) a10).b();
                }
            }
            return (char) 8226;
        }

        public int b() {
            return this.f43668e.length();
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
            return this.f43668e.subSequence(i10, i11);
        }
    }

    public s4(String mask) {
        Intrinsics.checkNotNullParameter(mask, "mask");
        this.f43666d = mask;
    }

    @Override // android.text.method.PasswordTransformationMethod, android.text.method.TransformationMethod
    public CharSequence getTransformation(CharSequence charSequence, View view) {
        if (charSequence == null) {
            return "";
        }
        return new a(this.f43666d, charSequence);
    }
}
