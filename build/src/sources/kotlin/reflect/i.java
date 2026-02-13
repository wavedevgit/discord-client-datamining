package kotlin.reflect;

import kotlin.enums.EnumEntries;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface i extends b {

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f32672d = new a("INSTANCE", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f32673e = new a("EXTENSION_RECEIVER", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f32674i = new a("VALUE", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f32675o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f32676p;

        static {
            a[] a10 = a();
            f32675o = a10;
            f32676p = hs.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f32672d, f32673e, f32674i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f32675o.clone();
        }
    }

    boolean b();

    int getIndex();

    a getKind();

    String getName();

    KType getType();

    boolean isVararg();
}
