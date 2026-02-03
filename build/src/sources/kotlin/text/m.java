package kotlin.text;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m implements c {

    /* renamed from: i  reason: collision with root package name */
    public static final m f35447i = new m("IGNORE_CASE", 0, 2, 0, 2, null);

    /* renamed from: o  reason: collision with root package name */
    public static final m f35448o = new m("MULTILINE", 1, 8, 0, 2, null);

    /* renamed from: p  reason: collision with root package name */
    public static final m f35449p = new m("LITERAL", 2, 16, 0, 2, null);

    /* renamed from: q  reason: collision with root package name */
    public static final m f35450q = new m("UNIX_LINES", 3, 1, 0, 2, null);

    /* renamed from: r  reason: collision with root package name */
    public static final m f35451r = new m("COMMENTS", 4, 4, 0, 2, null);

    /* renamed from: s  reason: collision with root package name */
    public static final m f35452s = new m("DOT_MATCHES_ALL", 5, 32, 0, 2, null);

    /* renamed from: t  reason: collision with root package name */
    public static final m f35453t = new m("CANON_EQ", 6, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, 0, 2, null);

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ m[] f35454u;

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f35455v;

    /* renamed from: d  reason: collision with root package name */
    private final int f35456d;

    /* renamed from: e  reason: collision with root package name */
    private final int f35457e;

    static {
        m[] a10 = a();
        f35454u = a10;
        f35455v = sr.a.a(a10);
    }

    private m(String str, int i10, int i11, int i12) {
        this.f35456d = i11;
        this.f35457e = i12;
    }

    private static final /* synthetic */ m[] a() {
        return new m[]{f35447i, f35448o, f35449p, f35450q, f35451r, f35452s, f35453t};
    }

    public static m valueOf(String str) {
        return (m) Enum.valueOf(m.class, str);
    }

    public static m[] values() {
        return (m[]) f35454u.clone();
    }

    @Override // kotlin.text.c
    public int getValue() {
        return this.f35456d;
    }

    /* synthetic */ m(String str, int i10, int i11, int i12, int i13, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, i10, i11, (i13 & 2) != 0 ? i11 : i12);
    }
}
