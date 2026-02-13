package kotlin.text;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m implements c {

    /* renamed from: i  reason: collision with root package name */
    public static final m f35539i = new m("IGNORE_CASE", 0, 2, 0, 2, null);

    /* renamed from: o  reason: collision with root package name */
    public static final m f35540o = new m("MULTILINE", 1, 8, 0, 2, null);

    /* renamed from: p  reason: collision with root package name */
    public static final m f35541p = new m("LITERAL", 2, 16, 0, 2, null);

    /* renamed from: q  reason: collision with root package name */
    public static final m f35542q = new m("UNIX_LINES", 3, 1, 0, 2, null);

    /* renamed from: r  reason: collision with root package name */
    public static final m f35543r = new m("COMMENTS", 4, 4, 0, 2, null);

    /* renamed from: s  reason: collision with root package name */
    public static final m f35544s = new m("DOT_MATCHES_ALL", 5, 32, 0, 2, null);

    /* renamed from: t  reason: collision with root package name */
    public static final m f35545t = new m("CANON_EQ", 6, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, 0, 2, null);

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ m[] f35546u;

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f35547v;

    /* renamed from: d  reason: collision with root package name */
    private final int f35548d;

    /* renamed from: e  reason: collision with root package name */
    private final int f35549e;

    static {
        m[] a10 = a();
        f35546u = a10;
        f35547v = hs.a.a(a10);
    }

    private m(String str, int i10, int i11, int i12) {
        this.f35548d = i11;
        this.f35549e = i12;
    }

    private static final /* synthetic */ m[] a() {
        return new m[]{f35539i, f35540o, f35541p, f35542q, f35543r, f35544s, f35545t};
    }

    public static m valueOf(String str) {
        return (m) Enum.valueOf(m.class, str);
    }

    public static m[] values() {
        return (m[]) f35546u.clone();
    }

    @Override // kotlin.text.c
    public int getValue() {
        return this.f35548d;
    }

    /* synthetic */ m(String str, int i10, int i11, int i12, int i13, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, i10, i11, (i13 & 2) != 0 ? i11 : i12);
    }
}
