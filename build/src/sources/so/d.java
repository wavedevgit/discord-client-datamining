package so;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final String f49118a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49119b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49120c;

    /* renamed from: d  reason: collision with root package name */
    private final String f49121d;

    /* renamed from: e  reason: collision with root package name */
    private final mo.f f49122e;

    /* renamed from: f  reason: collision with root package name */
    private final String f49123f;

    /* renamed from: g  reason: collision with root package name */
    private final String f49124g;

    /* renamed from: h  reason: collision with root package name */
    private final String f49125h;

    /* renamed from: i  reason: collision with root package name */
    private final String f49126i;

    /* renamed from: j  reason: collision with root package name */
    private final Map f49127j;

    /* renamed from: k  reason: collision with root package name */
    private final String f49128k;

    public d(String str, String str2, String str3, String str4, mo.f environment, String str5, String str6, String str7, String str8, Map map, String str9) {
        Intrinsics.checkNotNullParameter(environment, "environment");
        this.f49118a = str;
        this.f49119b = str2;
        this.f49120c = str3;
        this.f49121d = str4;
        this.f49122e = environment;
        this.f49123f = str5;
        this.f49124g = str6;
        this.f49125h = str7;
        this.f49126i = str8;
        this.f49127j = map;
        this.f49128k = str9;
    }

    public final String a() {
        return this.f49124g;
    }

    public final mo.f b() {
        return this.f49122e;
    }

    public final String c() {
        return this.f49123f;
    }

    public final Map d() {
        return this.f49127j;
    }

    public final String e() {
        return this.f49120c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f49118a, dVar.f49118a) && Intrinsics.areEqual(this.f49119b, dVar.f49119b) && Intrinsics.areEqual(this.f49120c, dVar.f49120c) && Intrinsics.areEqual(this.f49121d, dVar.f49121d) && this.f49122e == dVar.f49122e && Intrinsics.areEqual(this.f49123f, dVar.f49123f) && Intrinsics.areEqual(this.f49124g, dVar.f49124g) && Intrinsics.areEqual(this.f49125h, dVar.f49125h) && Intrinsics.areEqual(this.f49126i, dVar.f49126i) && Intrinsics.areEqual(this.f49127j, dVar.f49127j) && Intrinsics.areEqual(this.f49128k, dVar.f49128k)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f49125h;
    }

    public final String g() {
        return this.f49121d;
    }

    public final String h() {
        return this.f49118a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        int hashCode5;
        int hashCode6;
        int hashCode7;
        int hashCode8;
        int hashCode9;
        String str = this.f49118a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f49119b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f49120c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f49121d;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int hashCode10 = (((i13 + hashCode4) * 31) + this.f49122e.hashCode()) * 31;
        String str5 = this.f49123f;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i14 = (hashCode10 + hashCode5) * 31;
        String str6 = this.f49124g;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i15 = (i14 + hashCode6) * 31;
        String str7 = this.f49125h;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i16 = (i15 + hashCode7) * 31;
        String str8 = this.f49126i;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i17 = (i16 + hashCode8) * 31;
        Map map = this.f49127j;
        if (map == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = map.hashCode();
        }
        int i18 = (i17 + hashCode9) * 31;
        String str9 = this.f49128k;
        if (str9 != null) {
            i10 = str9.hashCode();
        }
        return i18 + i10;
    }

    public final String i() {
        return this.f49119b;
    }

    public final String j() {
        return this.f49128k;
    }

    public String toString() {
        String str = this.f49118a;
        String str2 = this.f49119b;
        String str3 = this.f49120c;
        String str4 = this.f49121d;
        mo.f fVar = this.f49122e;
        String str5 = this.f49123f;
        String str6 = this.f49124g;
        String str7 = this.f49125h;
        String str8 = this.f49126i;
        Map map = this.f49127j;
        String str9 = this.f49128k;
        return "InquiryAttributes(templateId=" + str + ", templateVersion=" + str2 + ", inquiryId=" + str3 + ", sessionToken=" + str4 + ", environment=" + fVar + ", environmentId=" + str5 + ", accountId=" + str6 + ", referenceId=" + str7 + ", note=" + str8 + ", fields=" + map + ", themeSetId=" + str9 + ")";
    }

    public /* synthetic */ d(String str, String str2, String str3, String str4, mo.f fVar, String str5, String str6, String str7, String str8, Map map, String str9, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, fVar, (i10 & 32) != 0 ? null : str5, (i10 & 64) != 0 ? null : str6, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : map, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str9);
    }
}
