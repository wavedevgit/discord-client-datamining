package kotlin.reflect;

import kotlin.enums.EnumEntries;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface i extends b {

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f32580d = new a("INSTANCE", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f32581e = new a("EXTENSION_RECEIVER", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f32582i = new a("VALUE", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f32583o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f32584p;

        static {
            a[] a10 = a();
            f32583o = a10;
            f32584p = sr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f32580d, f32581e, f32582i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f32583o.clone();
        }
    }

    boolean b();

    int getIndex();

    a getKind();

    String getName();

    KType getType();

    boolean isVararg();
}
