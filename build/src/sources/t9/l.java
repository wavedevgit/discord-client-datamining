package t9;

import com.facebook.common.references.CloseableReference;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final CloseableReference f50453a;

    /* renamed from: b  reason: collision with root package name */
    private final a f50454b;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f50455d = new a("SUCCESS", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f50456e = new a("NEAREST", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f50457i = new a("MISSING", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f50458o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f50459p;

        static {
            a[] a10 = a();
            f50458o = a10;
            f50459p = vr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f50455d, f50456e, f50457i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f50458o.clone();
        }
    }

    public l(CloseableReference closeableReference, a type) {
        Intrinsics.checkNotNullParameter(type, "type");
        this.f50453a = closeableReference;
        this.f50454b = type;
    }

    public final CloseableReference a() {
        return this.f50453a;
    }

    public final a b() {
        return this.f50454b;
    }
}
