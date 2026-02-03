package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import aq.a4;
import aq.b4;
import aq.c2;
import aq.e0;
import aq.k5;
import aq.v;
import bq.k;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputSelect;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Option;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements k5, a4, c2, v, e0 {

    /* renamed from: d  reason: collision with root package name */
    private final String f19348d;

    /* renamed from: e  reason: collision with root package name */
    private final InputSelectComponentStyle f19349e;

    /* renamed from: i  reason: collision with root package name */
    private final List f19350i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f19351o;

    /* renamed from: p  reason: collision with root package name */
    private final JsonLogicBoolean f19352p;

    /* renamed from: q  reason: collision with root package name */
    private final String f19353q;

    /* renamed from: r  reason: collision with root package name */
    private final String f19354r;

    /* renamed from: s  reason: collision with root package name */
    private final List f19355s;

    /* renamed from: t  reason: collision with root package name */
    private final List f19356t;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f19357u;

    /* renamed from: v  reason: collision with root package name */
    private k f19358v;

    /* renamed from: w  reason: collision with root package name */
    public static final a f19347w = new a(null);
    @NotNull
    public static final Parcelable.Creator<e> CREATOR = new b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final e a(InputSelect config) {
            List<Option> list;
            List l10;
            JsonLogicBoolean jsonLogicBoolean;
            JsonLogicBoolean jsonLogicBoolean2;
            String str;
            List l11;
            List<Option> options;
            String str2;
            Intrinsics.checkNotNullParameter(config, "config");
            InputSelect.Attributes attributes = config.getAttributes();
            String str3 = null;
            if (attributes != null) {
                list = attributes.getOptions();
            } else {
                list = null;
            }
            if (list != null) {
                ArrayList<Option> arrayList = new ArrayList();
                for (Object obj : list) {
                    String value = ((Option) obj).getValue();
                    InputSelect.Attributes attributes2 = config.getAttributes();
                    if (attributes2 != null) {
                        str2 = attributes2.getPrefill();
                    } else {
                        str2 = null;
                    }
                    if (Intrinsics.areEqual(value, str2)) {
                        arrayList.add(obj);
                    }
                }
                l10 = new ArrayList(CollectionsKt.w(arrayList, 10));
                for (Option option : arrayList) {
                    l10.add(new b4(option.getText(), option.getValue()));
                }
            } else {
                l10 = CollectionsKt.l();
            }
            List list2 = l10;
            String name = config.getName();
            InputSelectComponentStyle styles = config.getStyles();
            InputSelect.Attributes attributes3 = config.getAttributes();
            if (attributes3 != null) {
                jsonLogicBoolean = attributes3.getHidden();
            } else {
                jsonLogicBoolean = null;
            }
            InputSelect.Attributes attributes4 = config.getAttributes();
            if (attributes4 != null) {
                jsonLogicBoolean2 = attributes4.getDisabled();
            } else {
                jsonLogicBoolean2 = null;
            }
            InputSelect.Attributes attributes5 = config.getAttributes();
            if (attributes5 != null) {
                str = attributes5.getLabel();
            } else {
                str = null;
            }
            InputSelect.Attributes attributes6 = config.getAttributes();
            if (attributes6 != null) {
                str3 = attributes6.getPlaceholder();
            }
            String str4 = str3;
            InputSelect.Attributes attributes7 = config.getAttributes();
            if (attributes7 != null && (options = attributes7.getOptions()) != null) {
                List<Option> list3 = options;
                l11 = new ArrayList(CollectionsKt.w(list3, 10));
                for (Option option2 : list3) {
                    l11.add(new b4(option2.getText(), option2.getValue()));
                }
            } else {
                l11 = CollectionsKt.l();
            }
            return new e(name, styles, list2, jsonLogicBoolean, jsonLogicBoolean2, str, str4, l11);
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final e createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            InputSelectComponentStyle inputSelectComponentStyle = (InputSelectComponentStyle) parcel.readParcelable(e.class.getClassLoader());
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(b4.CREATOR.createFromParcel(parcel));
            }
            JsonLogicBoolean jsonLogicBoolean = (JsonLogicBoolean) parcel.readParcelable(e.class.getClassLoader());
            JsonLogicBoolean jsonLogicBoolean2 = (JsonLogicBoolean) parcel.readParcelable(e.class.getClassLoader());
            String readString2 = parcel.readString();
            String readString3 = parcel.readString();
            int readInt2 = parcel.readInt();
            ArrayList arrayList2 = new ArrayList(readInt2);
            for (int i11 = 0; i11 != readInt2; i11++) {
                arrayList2.add(b4.CREATOR.createFromParcel(parcel));
            }
            return new e(readString, inputSelectComponentStyle, arrayList, jsonLogicBoolean, jsonLogicBoolean2, readString2, readString3, arrayList2);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final e[] newArray(int i10) {
            return new e[i10];
        }
    }

    public e(String name, InputSelectComponentStyle inputSelectComponentStyle, List selectedOptions, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str, String str2, List options) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(selectedOptions, "selectedOptions");
        Intrinsics.checkNotNullParameter(options, "options");
        this.f19348d = name;
        this.f19349e = inputSelectComponentStyle;
        this.f19350i = selectedOptions;
        this.f19351o = jsonLogicBoolean;
        this.f19352p = jsonLogicBoolean2;
        this.f19353q = str;
        this.f19354r = str2;
        this.f19355s = options;
        this.f19356t = new ArrayList();
        this.f19358v = new k(f());
    }

    public static /* synthetic */ e i(e eVar, String str, InputSelectComponentStyle inputSelectComponentStyle, List list, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str2, String str3, List list2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = eVar.f19348d;
        }
        if ((i10 & 2) != 0) {
            inputSelectComponentStyle = eVar.f19349e;
        }
        if ((i10 & 4) != 0) {
            list = eVar.f19350i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean = eVar.f19351o;
        }
        if ((i10 & 16) != 0) {
            jsonLogicBoolean2 = eVar.f19352p;
        }
        if ((i10 & 32) != 0) {
            str2 = eVar.f19353q;
        }
        if ((i10 & 64) != 0) {
            str3 = eVar.f19354r;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            list2 = eVar.f19355s;
        }
        String str4 = str3;
        List list3 = list2;
        JsonLogicBoolean jsonLogicBoolean3 = jsonLogicBoolean2;
        String str5 = str2;
        return eVar.g(str, inputSelectComponentStyle, list, jsonLogicBoolean, jsonLogicBoolean3, str5, str4, list3);
    }

    @Override // aq.a4
    public k a() {
        return this.f19358v;
    }

    @Override // aq.c2
    public List b() {
        return this.f19355s;
    }

    @Override // aq.c2
    public boolean c() {
        return this.f19357u;
    }

    @Override // aq.e0
    public List d() {
        return this.f19356t;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            return Intrinsics.areEqual(this.f19348d, eVar.f19348d) && Intrinsics.areEqual(this.f19349e, eVar.f19349e) && Intrinsics.areEqual(this.f19350i, eVar.f19350i) && Intrinsics.areEqual(this.f19351o, eVar.f19351o) && Intrinsics.areEqual(this.f19352p, eVar.f19352p) && Intrinsics.areEqual(this.f19353q, eVar.f19353q) && Intrinsics.areEqual(this.f19354r, eVar.f19354r) && Intrinsics.areEqual(this.f19355s, eVar.f19355s);
        }
        return false;
    }

    @Override // aq.c2
    public List f() {
        return this.f19350i;
    }

    public final e g(String name, InputSelectComponentStyle inputSelectComponentStyle, List selectedOptions, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str, String str2, List options) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(selectedOptions, "selectedOptions");
        Intrinsics.checkNotNullParameter(options, "options");
        return new e(name, inputSelectComponentStyle, selectedOptions, jsonLogicBoolean, jsonLogicBoolean2, str, str2, options);
    }

    @Override // aq.v
    public JsonLogicBoolean getDisabled() {
        return this.f19352p;
    }

    @Override // aq.e0
    public JsonLogicBoolean getHidden() {
        return this.f19351o;
    }

    @Override // aq.c2
    public String getLabel() {
        return this.f19353q;
    }

    @Override // aq.k5
    public String getName() {
        return this.f19348d;
    }

    public int hashCode() {
        int hashCode = this.f19348d.hashCode() * 31;
        InputSelectComponentStyle inputSelectComponentStyle = this.f19349e;
        int hashCode2 = (((hashCode + (inputSelectComponentStyle == null ? 0 : inputSelectComponentStyle.hashCode())) * 31) + this.f19350i.hashCode()) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f19351o;
        int hashCode3 = (hashCode2 + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19352p;
        int hashCode4 = (hashCode3 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31;
        String str = this.f19353q;
        int hashCode5 = (hashCode4 + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.f19354r;
        return ((hashCode5 + (str2 != null ? str2.hashCode() : 0)) * 31) + this.f19355s.hashCode();
    }

    @Override // aq.c2
    /* renamed from: j */
    public InputSelectComponentStyle getStyles() {
        return this.f19349e;
    }

    public void k(k kVar) {
        Intrinsics.checkNotNullParameter(kVar, "<set-?>");
        this.f19358v = kVar;
    }

    @Override // aq.a4
    /* renamed from: m */
    public e e(List selectedOptions) {
        Intrinsics.checkNotNullParameter(selectedOptions, "selectedOptions");
        e i10 = i(this, null, null, CollectionsKt.a1(selectedOptions, 1), null, null, null, null, null, 251, null);
        i10.k(a());
        return i10;
    }

    public String toString() {
        String str = this.f19348d;
        InputSelectComponentStyle inputSelectComponentStyle = this.f19349e;
        List list = this.f19350i;
        JsonLogicBoolean jsonLogicBoolean = this.f19351o;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19352p;
        String str2 = this.f19353q;
        String str3 = this.f19354r;
        List list2 = this.f19355s;
        return "InputSelectComponent(name=" + str + ", styles=" + inputSelectComponentStyle + ", selectedOptions=" + list + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", label=" + str2 + ", placeholder=" + str3 + ", options=" + list2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f19348d);
        dest.writeParcelable(this.f19349e, i10);
        List<b4> list = this.f19350i;
        dest.writeInt(list.size());
        for (b4 b4Var : list) {
            b4Var.writeToParcel(dest, i10);
        }
        dest.writeParcelable(this.f19351o, i10);
        dest.writeParcelable(this.f19352p, i10);
        dest.writeString(this.f19353q);
        dest.writeString(this.f19354r);
        List<b4> list2 = this.f19355s;
        dest.writeInt(list2.size());
        for (b4 b4Var2 : list2) {
            b4Var2.writeToParcel(dest, i10);
        }
    }
}
