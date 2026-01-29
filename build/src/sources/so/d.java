package so;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final String f49102a;

    /* renamed from: b  reason: collision with root package name */
    private final String f49103b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49104c;

    /* renamed from: d  reason: collision with root package name */
    private final String f49105d;

    /* renamed from: e  reason: collision with root package name */
    private final mo.f f49106e;

    /* renamed from: f  reason: collision with root package name */
    private final String f49107f;

    /* renamed from: g  reason: collision with root package name */
    private final String f49108g;

    /* renamed from: h  reason: collision with root package name */
    private final String f49109h;

    /* renamed from: i  reason: collision with root package name */
    private final String f49110i;

    /* renamed from: j  reason: collision with root package name */
    private final Map f49111j;

    /* renamed from: k  reason: collision with root package name */
    private final String f49112k;

    public d(String str, String str2, String str3, String str4, mo.f environment, String str5, String str6, String str7, String str8, Map map, String str9) {
        Intrinsics.checkNotNullParameter(environment, "environment");
        this.f49102a = str;
        this.f49103b = str2;
        this.f49104c = str3;
        this.f49105d = str4;
        this.f49106e = environment;
        this.f49107f = str5;
        this.f49108g = str6;
        this.f49109h = str7;
        this.f49110i = str8;
        this.f49111j = map;
        this.f49112k = str9;
    }

    public final String a() {
        return this.f49108g;
    }

    public final mo.f b() {
        return this.f49106e;
    }

    public final String c() {
        return this.f49107f;
    }

    public final Map d() {
        return this.f49111j;
    }

    public final String e() {
        return this.f49104c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f49102a, dVar.f49102a) && Intrinsics.areEqual(this.f49103b, dVar.f49103b) && Intrinsics.areEqual(this.f49104c, dVar.f49104c) && Intrinsics.areEqual(this.f49105d, dVar.f49105d) && this.f49106e == dVar.f49106e && Intrinsics.areEqual(this.f49107f, dVar.f49107f) && Intrinsics.areEqual(this.f49108g, dVar.f49108g) && Intrinsics.areEqual(this.f49109h, dVar.f49109h) && Intrinsics.areEqual(this.f49110i, dVar.f49110i) && Intrinsics.areEqual(this.f49111j, dVar.f49111j) && Intrinsics.areEqual(this.f49112k, dVar.f49112k)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f49109h;
    }

    public final String g() {
        return this.f49105d;
    }

    public final String h() {
        return this.f49102a;
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
        String str = this.f49102a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f49103b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f49104c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f49105d;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int hashCode10 = (((i13 + hashCode4) * 31) + this.f49106e.hashCode()) * 31;
        String str5 = this.f49107f;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i14 = (hashCode10 + hashCode5) * 31;
        String str6 = this.f49108g;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i15 = (i14 + hashCode6) * 31;
        String str7 = this.f49109h;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i16 = (i15 + hashCode7) * 31;
        String str8 = this.f49110i;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i17 = (i16 + hashCode8) * 31;
        Map map = this.f49111j;
        if (map == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = map.hashCode();
        }
        int i18 = (i17 + hashCode9) * 31;
        String str9 = this.f49112k;
        if (str9 != null) {
            i10 = str9.hashCode();
        }
        return i18 + i10;
    }

    public final String i() {
        return this.f49103b;
    }

    public final String j() {
        return this.f49112k;
    }

    public String toString() {
        String str = this.f49102a;
        String str2 = this.f49103b;
        String str3 = this.f49104c;
        String str4 = this.f49105d;
        mo.f fVar = this.f49106e;
        String str5 = this.f49107f;
        String str6 = this.f49108g;
        String str7 = this.f49109h;
        String str8 = this.f49110i;
        Map map = this.f49111j;
        String str9 = this.f49112k;
        return "InquiryAttributes(templateId=" + str + ", templateVersion=" + str2 + ", inquiryId=" + str3 + ", sessionToken=" + str4 + ", environment=" + fVar + ", environmentId=" + str5 + ", accountId=" + str6 + ", referenceId=" + str7 + ", note=" + str8 + ", fields=" + map + ", themeSetId=" + str9 + ")";
    }

    public /* synthetic */ d(String str, String str2, String str3, String str4, mo.f fVar, String str5, String str6, String str7, String str8, Map map, String str9, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, fVar, (i10 & 32) != 0 ? null : str5, (i10 & 64) != 0 ? null : str6, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : map, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str9);
    }
}
