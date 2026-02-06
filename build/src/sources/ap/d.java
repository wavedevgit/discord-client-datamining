package ap;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final String f6238a;

    /* renamed from: b  reason: collision with root package name */
    private final String f6239b;

    /* renamed from: c  reason: collision with root package name */
    private final String f6240c;

    /* renamed from: d  reason: collision with root package name */
    private final String f6241d;

    /* renamed from: e  reason: collision with root package name */
    private final uo.f f6242e;

    /* renamed from: f  reason: collision with root package name */
    private final String f6243f;

    /* renamed from: g  reason: collision with root package name */
    private final String f6244g;

    /* renamed from: h  reason: collision with root package name */
    private final String f6245h;

    /* renamed from: i  reason: collision with root package name */
    private final String f6246i;

    /* renamed from: j  reason: collision with root package name */
    private final Map f6247j;

    /* renamed from: k  reason: collision with root package name */
    private final String f6248k;

    public d(String str, String str2, String str3, String str4, uo.f environment, String str5, String str6, String str7, String str8, Map map, String str9) {
        Intrinsics.checkNotNullParameter(environment, "environment");
        this.f6238a = str;
        this.f6239b = str2;
        this.f6240c = str3;
        this.f6241d = str4;
        this.f6242e = environment;
        this.f6243f = str5;
        this.f6244g = str6;
        this.f6245h = str7;
        this.f6246i = str8;
        this.f6247j = map;
        this.f6248k = str9;
    }

    public final String a() {
        return this.f6244g;
    }

    public final uo.f b() {
        return this.f6242e;
    }

    public final String c() {
        return this.f6243f;
    }

    public final Map d() {
        return this.f6247j;
    }

    public final String e() {
        return this.f6240c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f6238a, dVar.f6238a) && Intrinsics.areEqual(this.f6239b, dVar.f6239b) && Intrinsics.areEqual(this.f6240c, dVar.f6240c) && Intrinsics.areEqual(this.f6241d, dVar.f6241d) && this.f6242e == dVar.f6242e && Intrinsics.areEqual(this.f6243f, dVar.f6243f) && Intrinsics.areEqual(this.f6244g, dVar.f6244g) && Intrinsics.areEqual(this.f6245h, dVar.f6245h) && Intrinsics.areEqual(this.f6246i, dVar.f6246i) && Intrinsics.areEqual(this.f6247j, dVar.f6247j) && Intrinsics.areEqual(this.f6248k, dVar.f6248k)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f6245h;
    }

    public final String g() {
        return this.f6241d;
    }

    public final String h() {
        return this.f6238a;
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
        String str = this.f6238a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f6239b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f6240c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f6241d;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int hashCode10 = (((i13 + hashCode4) * 31) + this.f6242e.hashCode()) * 31;
        String str5 = this.f6243f;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i14 = (hashCode10 + hashCode5) * 31;
        String str6 = this.f6244g;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i15 = (i14 + hashCode6) * 31;
        String str7 = this.f6245h;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i16 = (i15 + hashCode7) * 31;
        String str8 = this.f6246i;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i17 = (i16 + hashCode8) * 31;
        Map map = this.f6247j;
        if (map == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = map.hashCode();
        }
        int i18 = (i17 + hashCode9) * 31;
        String str9 = this.f6248k;
        if (str9 != null) {
            i10 = str9.hashCode();
        }
        return i18 + i10;
    }

    public final String i() {
        return this.f6239b;
    }

    public final String j() {
        return this.f6248k;
    }

    public String toString() {
        String str = this.f6238a;
        String str2 = this.f6239b;
        String str3 = this.f6240c;
        String str4 = this.f6241d;
        uo.f fVar = this.f6242e;
        String str5 = this.f6243f;
        String str6 = this.f6244g;
        String str7 = this.f6245h;
        String str8 = this.f6246i;
        Map map = this.f6247j;
        String str9 = this.f6248k;
        return "InquiryAttributes(templateId=" + str + ", templateVersion=" + str2 + ", inquiryId=" + str3 + ", sessionToken=" + str4 + ", environment=" + fVar + ", environmentId=" + str5 + ", accountId=" + str6 + ", referenceId=" + str7 + ", note=" + str8 + ", fields=" + map + ", themeSetId=" + str9 + ")";
    }

    public /* synthetic */ d(String str, String str2, String str3, String str4, uo.f fVar, String str5, String str6, String str7, String str8, Map map, String str9, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, fVar, (i10 & 32) != 0 ? null : str5, (i10 & 64) != 0 ? null : str6, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : map, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str9);
    }
}
