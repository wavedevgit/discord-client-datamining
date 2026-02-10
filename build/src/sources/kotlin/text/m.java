package kotlin.text;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m implements c {

    /* renamed from: i  reason: collision with root package name */
    public static final m f34748i = new m("IGNORE_CASE", 0, 2, 0, 2, null);

    /* renamed from: o  reason: collision with root package name */
    public static final m f34749o = new m("MULTILINE", 1, 8, 0, 2, null);

    /* renamed from: p  reason: collision with root package name */
    public static final m f34750p = new m("LITERAL", 2, 16, 0, 2, null);

    /* renamed from: q  reason: collision with root package name */
    public static final m f34751q = new m("UNIX_LINES", 3, 1, 0, 2, null);

    /* renamed from: r  reason: collision with root package name */
    public static final m f34752r = new m("COMMENTS", 4, 4, 0, 2, null);

    /* renamed from: s  reason: collision with root package name */
    public static final m f34753s = new m("DOT_MATCHES_ALL", 5, 32, 0, 2, null);

    /* renamed from: t  reason: collision with root package name */
    public static final m f34754t = new m("CANON_EQ", 6, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, 0, 2, null);

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ m[] f34755u;

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f34756v;

    /* renamed from: d  reason: collision with root package name */
    private final int f34757d;

    /* renamed from: e  reason: collision with root package name */
    private final int f34758e;

    static {
        m[] a10 = a();
        f34755u = a10;
        f34756v = yr.a.a(a10);
    }

    private m(String str, int i10, int i11, int i12) {
        this.f34757d = i11;
        this.f34758e = i12;
    }

    private static final /* synthetic */ m[] a() {
        return new m[]{f34748i, f34749o, f34750p, f34751q, f34752r, f34753s, f34754t};
    }

    public static m valueOf(String str) {
        return (m) Enum.valueOf(m.class, str);
    }

    public static m[] values() {
        return (m[]) f34755u.clone();
    }

    @Override // kotlin.text.c
    public int getValue() {
        return this.f34757d;
    }

    /* synthetic */ m(String str, int i10, int i11, int i12, int i13, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, i10, i11, (i13 & 2) != 0 ? i11 : i12);
    }
}
