package vo;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final String f51709a;

    /* renamed from: b  reason: collision with root package name */
    private final String f51710b;

    /* renamed from: c  reason: collision with root package name */
    private final String f51711c;

    /* renamed from: d  reason: collision with root package name */
    private final String f51712d;

    /* renamed from: e  reason: collision with root package name */
    private final po.f f51713e;

    /* renamed from: f  reason: collision with root package name */
    private final String f51714f;

    /* renamed from: g  reason: collision with root package name */
    private final String f51715g;

    /* renamed from: h  reason: collision with root package name */
    private final String f51716h;

    /* renamed from: i  reason: collision with root package name */
    private final String f51717i;

    /* renamed from: j  reason: collision with root package name */
    private final Map f51718j;

    /* renamed from: k  reason: collision with root package name */
    private final String f51719k;

    public d(String str, String str2, String str3, String str4, po.f environment, String str5, String str6, String str7, String str8, Map map, String str9) {
        Intrinsics.checkNotNullParameter(environment, "environment");
        this.f51709a = str;
        this.f51710b = str2;
        this.f51711c = str3;
        this.f51712d = str4;
        this.f51713e = environment;
        this.f51714f = str5;
        this.f51715g = str6;
        this.f51716h = str7;
        this.f51717i = str8;
        this.f51718j = map;
        this.f51719k = str9;
    }

    public final String a() {
        return this.f51715g;
    }

    public final po.f b() {
        return this.f51713e;
    }

    public final String c() {
        return this.f51714f;
    }

    public final Map d() {
        return this.f51718j;
    }

    public final String e() {
        return this.f51711c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (Intrinsics.areEqual(this.f51709a, dVar.f51709a) && Intrinsics.areEqual(this.f51710b, dVar.f51710b) && Intrinsics.areEqual(this.f51711c, dVar.f51711c) && Intrinsics.areEqual(this.f51712d, dVar.f51712d) && this.f51713e == dVar.f51713e && Intrinsics.areEqual(this.f51714f, dVar.f51714f) && Intrinsics.areEqual(this.f51715g, dVar.f51715g) && Intrinsics.areEqual(this.f51716h, dVar.f51716h) && Intrinsics.areEqual(this.f51717i, dVar.f51717i) && Intrinsics.areEqual(this.f51718j, dVar.f51718j) && Intrinsics.areEqual(this.f51719k, dVar.f51719k)) {
            return true;
        }
        return false;
    }

    public final String f() {
        return this.f51716h;
    }

    public final String g() {
        return this.f51712d;
    }

    public final String h() {
        return this.f51709a;
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
        String str = this.f51709a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f51710b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        String str3 = this.f51711c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str4 = this.f51712d;
        if (str4 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str4.hashCode();
        }
        int hashCode10 = (((i13 + hashCode4) * 31) + this.f51713e.hashCode()) * 31;
        String str5 = this.f51714f;
        if (str5 == null) {
            hashCode5 = 0;
        } else {
            hashCode5 = str5.hashCode();
        }
        int i14 = (hashCode10 + hashCode5) * 31;
        String str6 = this.f51715g;
        if (str6 == null) {
            hashCode6 = 0;
        } else {
            hashCode6 = str6.hashCode();
        }
        int i15 = (i14 + hashCode6) * 31;
        String str7 = this.f51716h;
        if (str7 == null) {
            hashCode7 = 0;
        } else {
            hashCode7 = str7.hashCode();
        }
        int i16 = (i15 + hashCode7) * 31;
        String str8 = this.f51717i;
        if (str8 == null) {
            hashCode8 = 0;
        } else {
            hashCode8 = str8.hashCode();
        }
        int i17 = (i16 + hashCode8) * 31;
        Map map = this.f51718j;
        if (map == null) {
            hashCode9 = 0;
        } else {
            hashCode9 = map.hashCode();
        }
        int i18 = (i17 + hashCode9) * 31;
        String str9 = this.f51719k;
        if (str9 != null) {
            i10 = str9.hashCode();
        }
        return i18 + i10;
    }

    public final String i() {
        return this.f51710b;
    }

    public final String j() {
        return this.f51719k;
    }

    public String toString() {
        String str = this.f51709a;
        String str2 = this.f51710b;
        String str3 = this.f51711c;
        String str4 = this.f51712d;
        po.f fVar = this.f51713e;
        String str5 = this.f51714f;
        String str6 = this.f51715g;
        String str7 = this.f51716h;
        String str8 = this.f51717i;
        Map map = this.f51718j;
        String str9 = this.f51719k;
        return "InquiryAttributes(templateId=" + str + ", templateVersion=" + str2 + ", inquiryId=" + str3 + ", sessionToken=" + str4 + ", environment=" + fVar + ", environmentId=" + str5 + ", accountId=" + str6 + ", referenceId=" + str7 + ", note=" + str8 + ", fields=" + map + ", themeSetId=" + str9 + ")";
    }

    public /* synthetic */ d(String str, String str2, String str3, String str4, po.f fVar, String str5, String str6, String str7, String str8, Map map, String str9, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, fVar, (i10 & 32) != 0 ? null : str5, (i10 & 64) != 0 ? null : str6, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str8, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : map, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str9);
    }
}
