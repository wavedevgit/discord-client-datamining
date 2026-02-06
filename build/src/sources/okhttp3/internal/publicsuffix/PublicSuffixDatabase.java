package okhttp3.internal.publicsuffix;

import bs.c;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import cu.e;
import java.io.IOException;
import java.io.InputStream;
import java.io.InterruptedIOException;
import java.net.IDN;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.atomic.AtomicBoolean;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.sequences.k;
import kotlin.text.StringsKt;
import lu.h;
import okio.BufferedSource;
import qu.m;
import qu.x;
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0012\n\u0002\b\u0004\u0018\u0000 \r2\u00020\u0001:\u0001\u0012B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u001d\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00040\u00062\u0006\u0010\u0005\u001a\u00020\u0004H\u0002¢\u0006\u0004\b\u0007\u0010\bJ#\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u00040\u00062\f\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u00040\u0006H\u0002¢\u0006\u0004\b\n\u0010\u000bJ\u000f\u0010\r\u001a\u00020\fH\u0002¢\u0006\u0004\b\r\u0010\u0003J\u000f\u0010\u000e\u001a\u00020\fH\u0002¢\u0006\u0004\b\u000e\u0010\u0003J\u0017\u0010\u000f\u001a\u0004\u0018\u00010\u00042\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u000f\u0010\u0010R\u0014\u0010\u0014\u001a\u00020\u00118\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0017\u001a\u00020\u00158\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\n\u0010\u0016R\u0016\u0010\u001a\u001a\u00020\u00188\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\b\u000f\u0010\u0019R\u0016\u0010\u001b\u001a\u00020\u00188\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\b\u000e\u0010\u0019¨\u0006\u001c"}, d2 = {"Lokhttp3/internal/publicsuffix/PublicSuffixDatabase;", "", "<init>", "()V", "", "domain", "", "f", "(Ljava/lang/String;)Ljava/util/List;", "domainLabels", "b", "(Ljava/util/List;)Ljava/util/List;", "", "e", "d", "c", "(Ljava/lang/String;)Ljava/lang/String;", "Ljava/util/concurrent/atomic/AtomicBoolean;", "a", "Ljava/util/concurrent/atomic/AtomicBoolean;", "listRead", "Ljava/util/concurrent/CountDownLatch;", "Ljava/util/concurrent/CountDownLatch;", "readCompleteLatch", "", "[B", "publicSuffixListBytes", "publicSuffixExceptionListBytes", "okhttp"}, k = 1, mv = {1, 8, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class PublicSuffixDatabase {

    /* renamed from: e  reason: collision with root package name */
    public static final a f43147e = new a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final byte[] f43148f = {42};

    /* renamed from: g  reason: collision with root package name */
    private static final List f43149g = CollectionsKt.e("*");

    /* renamed from: h  reason: collision with root package name */
    private static final PublicSuffixDatabase f43150h = new PublicSuffixDatabase();

    /* renamed from: a  reason: collision with root package name */
    private final AtomicBoolean f43151a = new AtomicBoolean(false);

    /* renamed from: b  reason: collision with root package name */
    private final CountDownLatch f43152b = new CountDownLatch(1);

    /* renamed from: c  reason: collision with root package name */
    private byte[] f43153c;

    /* renamed from: d  reason: collision with root package name */
    private byte[] f43154d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final String b(byte[] bArr, byte[][] bArr2, int i10) {
            int i11;
            int d10;
            boolean z10;
            int d11;
            int length = bArr.length;
            int i12 = 0;
            while (i12 < length) {
                int i13 = (i12 + length) / 2;
                while (i13 > -1 && bArr[i13] != 10) {
                    i13--;
                }
                int i14 = i13 + 1;
                int i15 = 1;
                while (true) {
                    i11 = i14 + i15;
                    if (bArr[i11] == 10) {
                        break;
                    }
                    i15++;
                }
                int i16 = i11 - i14;
                int i17 = i10;
                boolean z11 = false;
                int i18 = 0;
                int i19 = 0;
                while (true) {
                    if (z11) {
                        d10 = 46;
                        z10 = false;
                    } else {
                        boolean z12 = z11;
                        d10 = e.d(bArr2[i17][i18], SetSpanOperation.SPAN_MAX_PRIORITY);
                        z10 = z12;
                    }
                    d11 = d10 - e.d(bArr[i14 + i19], SetSpanOperation.SPAN_MAX_PRIORITY);
                    if (d11 != 0) {
                        break;
                    }
                    i19++;
                    i18++;
                    if (i19 == i16) {
                        break;
                    } else if (bArr2[i17].length == i18) {
                        if (i17 == bArr2.length - 1) {
                            break;
                        }
                        i17++;
                        z11 = true;
                        i18 = -1;
                    } else {
                        z11 = z10;
                    }
                }
                if (d11 >= 0) {
                    if (d11 <= 0) {
                        int i20 = i16 - i19;
                        int length2 = bArr2[i17].length - i18;
                        int length3 = bArr2.length;
                        for (int i21 = i17 + 1; i21 < length3; i21++) {
                            length2 += bArr2[i21].length;
                        }
                        if (length2 >= i20) {
                            if (length2 <= i20) {
                                Charset UTF_8 = StandardCharsets.UTF_8;
                                Intrinsics.checkNotNullExpressionValue(UTF_8, "UTF_8");
                                return new String(bArr, i14, i16, UTF_8);
                            }
                        }
                    }
                    i12 = i11 + 1;
                }
                length = i13;
            }
            return null;
        }

        public final PublicSuffixDatabase c() {
            return PublicSuffixDatabase.f43150h;
        }

        private a() {
        }
    }

    private final List b(List list) {
        String str;
        String str2;
        String str3;
        List l10;
        List l11;
        if (!this.f43151a.get() && this.f43151a.compareAndSet(false, true)) {
            e();
        } else {
            try {
                this.f43152b.await();
            } catch (InterruptedException unused) {
                Thread.currentThread().interrupt();
            }
        }
        if (this.f43153c != null) {
            int size = list.size();
            byte[][] bArr = new byte[size];
            for (int i10 = 0; i10 < size; i10++) {
                Charset UTF_8 = StandardCharsets.UTF_8;
                Intrinsics.checkNotNullExpressionValue(UTF_8, "UTF_8");
                byte[] bytes = ((String) list.get(i10)).getBytes(UTF_8);
                Intrinsics.checkNotNullExpressionValue(bytes, "this as java.lang.String).getBytes(charset)");
                bArr[i10] = bytes;
            }
            int i11 = 0;
            while (true) {
                str = null;
                if (i11 < size) {
                    a aVar = f43147e;
                    byte[] bArr2 = this.f43153c;
                    if (bArr2 == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("publicSuffixListBytes");
                        bArr2 = null;
                    }
                    str2 = aVar.b(bArr2, bArr, i11);
                    if (str2 != null) {
                        break;
                    }
                    i11++;
                } else {
                    str2 = null;
                    break;
                }
            }
            if (size > 1) {
                byte[][] bArr3 = (byte[][]) bArr.clone();
                int length = bArr3.length - 1;
                for (int i12 = 0; i12 < length; i12++) {
                    bArr3[i12] = f43148f;
                    a aVar2 = f43147e;
                    byte[] bArr4 = this.f43153c;
                    if (bArr4 == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("publicSuffixListBytes");
                        bArr4 = null;
                    }
                    String b10 = aVar2.b(bArr4, bArr3, i12);
                    if (b10 != null) {
                        str3 = b10;
                        break;
                    }
                }
            }
            str3 = null;
            if (str3 != null) {
                int i13 = size - 1;
                int i14 = 0;
                while (true) {
                    if (i14 >= i13) {
                        break;
                    }
                    a aVar3 = f43147e;
                    byte[] bArr5 = this.f43154d;
                    if (bArr5 == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("publicSuffixExceptionListBytes");
                        bArr5 = null;
                    }
                    String b11 = aVar3.b(bArr5, bArr, i14);
                    if (b11 != null) {
                        str = b11;
                        break;
                    }
                    i14++;
                }
            }
            if (str != null) {
                return StringsKt.L0('!' + str, new char[]{'.'}, false, 0, 6, null);
            } else if (str2 == null && str3 == null) {
                return f43149g;
            } else {
                if (str2 == null || (l10 = StringsKt.L0(str2, new char[]{'.'}, false, 0, 6, null)) == null) {
                    l10 = CollectionsKt.l();
                }
                if (str3 == null || (l11 = StringsKt.L0(str3, new char[]{'.'}, false, 0, 6, null)) == null) {
                    l11 = CollectionsKt.l();
                }
                if (l10.size() <= l11.size()) {
                    return l11;
                }
                return l10;
            }
        }
        throw new IllegalStateException("Unable to load publicsuffixes.gz resource from the classpath.");
    }

    /* JADX WARN: Type inference failed for: r3v4, types: [T, byte[]] */
    /* JADX WARN: Type inference failed for: r3v7, types: [T, byte[]] */
    private final void d() {
        try {
            Ref.ObjectRef objectRef = new Ref.ObjectRef();
            Ref.ObjectRef objectRef2 = new Ref.ObjectRef();
            InputStream resourceAsStream = PublicSuffixDatabase.class.getResourceAsStream("publicsuffixes.gz");
            if (resourceAsStream != null) {
                BufferedSource d10 = x.d(new m(x.k(resourceAsStream)));
                objectRef.element = d10.N0(d10.readInt());
                objectRef2.element = d10.N0(d10.readInt());
                Unit unit = Unit.f32008a;
                c.a(d10, null);
                synchronized (this) {
                    T t10 = objectRef.element;
                    Intrinsics.checkNotNull(t10);
                    this.f43153c = (byte[]) t10;
                    T t11 = objectRef2.element;
                    Intrinsics.checkNotNull(t11);
                    this.f43154d = (byte[]) t11;
                }
            }
        } finally {
            this.f43152b.countDown();
        }
    }

    private final void e() {
        boolean z10 = false;
        while (true) {
            try {
                try {
                    d();
                    break;
                } catch (InterruptedIOException unused) {
                    Thread.interrupted();
                    z10 = true;
                } catch (IOException e10) {
                    h.f36777a.g().k("Failed to read public suffix list", 5, e10);
                    if (!z10) {
                        return;
                    }
                }
            } finally {
                if (z10) {
                    Thread.currentThread().interrupt();
                }
            }
        }
    }

    private final List f(String str) {
        List L0 = StringsKt.L0(str, new char[]{'.'}, false, 0, 6, null);
        if (Intrinsics.areEqual(CollectionsKt.z0(L0), "")) {
            return CollectionsKt.g0(L0, 1);
        }
        return L0;
    }

    public final String c(String domain) {
        int size;
        int size2;
        Intrinsics.checkNotNullParameter(domain, "domain");
        String unicodeDomain = IDN.toUnicode(domain);
        Intrinsics.checkNotNullExpressionValue(unicodeDomain, "unicodeDomain");
        List f10 = f(unicodeDomain);
        List b10 = b(f10);
        if (f10.size() == b10.size() && ((String) b10.get(0)).charAt(0) != '!') {
            return null;
        }
        if (((String) b10.get(0)).charAt(0) == '!') {
            size = f10.size();
            size2 = b10.size();
        } else {
            size = f10.size();
            size2 = b10.size() + 1;
        }
        return k.P(k.D(CollectionsKt.b0(f(domain)), size - size2), ".", null, null, 0, null, null, 62, null);
    }
}
