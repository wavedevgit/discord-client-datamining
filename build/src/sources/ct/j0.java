package ct;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import zs.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j0 {

    /* renamed from: a  reason: collision with root package name */
    private Object[] f21358a = new Object[8];

    /* renamed from: b  reason: collision with root package name */
    private int[] f21359b;

    /* renamed from: c  reason: collision with root package name */
    private int f21360c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public static final a f21361a = new a();

        private a() {
        }
    }

    public j0() {
        int[] iArr = new int[8];
        for (int i10 = 0; i10 < 8; i10++) {
            iArr[i10] = -1;
        }
        this.f21359b = iArr;
        this.f21360c = -1;
    }

    private final void e() {
        int i10 = this.f21360c * 2;
        Object[] copyOf = Arrays.copyOf(this.f21358a, i10);
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        this.f21358a = copyOf;
        int[] copyOf2 = Arrays.copyOf(this.f21359b, i10);
        Intrinsics.checkNotNullExpressionValue(copyOf2, "copyOf(...)");
        this.f21359b = copyOf2;
    }

    public final String a() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("$");
        int i10 = this.f21360c + 1;
        for (int i11 = 0; i11 < i10; i11++) {
            Object obj = this.f21358a[i11];
            if (obj instanceof SerialDescriptor) {
                SerialDescriptor serialDescriptor = (SerialDescriptor) obj;
                if (Intrinsics.areEqual(serialDescriptor.getKind(), l.b.f56119a)) {
                    if (this.f21359b[i11] != -1) {
                        sb2.append("[");
                        sb2.append(this.f21359b[i11]);
                        sb2.append("]");
                    }
                } else {
                    int i12 = this.f21359b[i11];
                    if (i12 >= 0) {
                        sb2.append(".");
                        sb2.append(serialDescriptor.e(i12));
                    }
                }
            } else if (obj != a.f21361a) {
                sb2.append("[");
                sb2.append("'");
                sb2.append(obj);
                sb2.append("'");
                sb2.append("]");
            }
        }
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }

    public final void b() {
        int i10 = this.f21360c;
        int[] iArr = this.f21359b;
        if (iArr[i10] == -2) {
            iArr[i10] = -1;
            this.f21360c = i10 - 1;
        }
        int i11 = this.f21360c;
        if (i11 != -1) {
            this.f21360c = i11 - 1;
        }
    }

    public final void c(SerialDescriptor sd2) {
        Intrinsics.checkNotNullParameter(sd2, "sd");
        int i10 = this.f21360c + 1;
        this.f21360c = i10;
        if (i10 == this.f21358a.length) {
            e();
        }
        this.f21358a[i10] = sd2;
    }

    public final void d() {
        int[] iArr = this.f21359b;
        int i10 = this.f21360c;
        if (iArr[i10] == -2) {
            this.f21358a[i10] = a.f21361a;
        }
    }

    public final void f(Object obj) {
        int[] iArr = this.f21359b;
        int i10 = this.f21360c;
        if (iArr[i10] != -2) {
            int i11 = i10 + 1;
            this.f21360c = i11;
            if (i11 == this.f21358a.length) {
                e();
            }
        }
        Object[] objArr = this.f21358a;
        int i12 = this.f21360c;
        objArr[i12] = obj;
        this.f21359b[i12] = -2;
    }

    public final void g(int i10) {
        this.f21359b[this.f21360c] = i10;
    }

    public String toString() {
        return a();
    }
}
