package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputMultiSelect;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Option;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import xp.a4;
import xp.b4;
import xp.c2;
import xp.e0;
import xp.k5;
import xp.v;
import yp.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements k5, a4, c2, v, e0 {

    /* renamed from: d  reason: collision with root package name */
    private final String f20721d;

    /* renamed from: e  reason: collision with root package name */
    private final InputSelectComponentStyle f20722e;

    /* renamed from: i  reason: collision with root package name */
    private final List f20723i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f20724o;

    /* renamed from: p  reason: collision with root package name */
    private final JsonLogicBoolean f20725p;

    /* renamed from: q  reason: collision with root package name */
    private final String f20726q;

    /* renamed from: r  reason: collision with root package name */
    private final String f20727r;

    /* renamed from: s  reason: collision with root package name */
    private final List f20728s;

    /* renamed from: t  reason: collision with root package name */
    private final List f20729t;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f20730u;

    /* renamed from: v  reason: collision with root package name */
    private k f20731v;

    /* renamed from: w  reason: collision with root package name */
    public static final a f20720w = new a(null);
    @NotNull
    public static final Parcelable.Creator<d> CREATOR = new b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final d a(InputMultiSelect config) {
            List<Option> list;
            Set d10;
            List l10;
            JsonLogicBoolean jsonLogicBoolean;
            JsonLogicBoolean jsonLogicBoolean2;
            String str;
            List l11;
            List<Option> options;
            List<String> prefill;
            Intrinsics.checkNotNullParameter(config, "config");
            InputMultiSelect.Attributes attributes = config.getAttributes();
            String str2 = null;
            if (attributes != null) {
                list = attributes.getOptions();
            } else {
                list = null;
            }
            InputMultiSelect.Attributes attributes2 = config.getAttributes();
            if (attributes2 == null || (prefill = attributes2.getPrefill()) == null || (d10 = CollectionsKt.l1(prefill)) == null) {
                d10 = x0.d();
            }
            if (list != null) {
                ArrayList<Option> arrayList = new ArrayList();
                for (Object obj : list) {
                    if (d10.contains(((Option) obj).getValue())) {
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
            InputMultiSelect.Attributes attributes3 = config.getAttributes();
            if (attributes3 != null) {
                jsonLogicBoolean = attributes3.getHidden();
            } else {
                jsonLogicBoolean = null;
            }
            InputMultiSelect.Attributes attributes4 = config.getAttributes();
            if (attributes4 != null) {
                jsonLogicBoolean2 = attributes4.getDisabled();
            } else {
                jsonLogicBoolean2 = null;
            }
            InputMultiSelect.Attributes attributes5 = config.getAttributes();
            if (attributes5 != null) {
                str = attributes5.getLabel();
            } else {
                str = null;
            }
            InputMultiSelect.Attributes attributes6 = config.getAttributes();
            if (attributes6 != null) {
                str2 = attributes6.getPlaceholder();
            }
            String str3 = str2;
            InputMultiSelect.Attributes attributes7 = config.getAttributes();
            if (attributes7 != null && (options = attributes7.getOptions()) != null) {
                List<Option> list3 = options;
                l11 = new ArrayList(CollectionsKt.w(list3, 10));
                for (Option option2 : list3) {
                    l11.add(new b4(option2.getText(), option2.getValue()));
                }
            } else {
                l11 = CollectionsKt.l();
            }
            return new d(name, styles, list2, jsonLogicBoolean, jsonLogicBoolean2, str, str3, l11);
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final d createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            InputSelectComponentStyle inputSelectComponentStyle = (InputSelectComponentStyle) parcel.readParcelable(d.class.getClassLoader());
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(b4.CREATOR.createFromParcel(parcel));
            }
            JsonLogicBoolean jsonLogicBoolean = (JsonLogicBoolean) parcel.readParcelable(d.class.getClassLoader());
            JsonLogicBoolean jsonLogicBoolean2 = (JsonLogicBoolean) parcel.readParcelable(d.class.getClassLoader());
            String readString2 = parcel.readString();
            String readString3 = parcel.readString();
            int readInt2 = parcel.readInt();
            ArrayList arrayList2 = new ArrayList(readInt2);
            for (int i11 = 0; i11 != readInt2; i11++) {
                arrayList2.add(b4.CREATOR.createFromParcel(parcel));
            }
            return new d(readString, inputSelectComponentStyle, arrayList, jsonLogicBoolean, jsonLogicBoolean2, readString2, readString3, arrayList2);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final d[] newArray(int i10) {
            return new d[i10];
        }
    }

    public d(String name, InputSelectComponentStyle inputSelectComponentStyle, List selectedOptions, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str, String str2, List options) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(selectedOptions, "selectedOptions");
        Intrinsics.checkNotNullParameter(options, "options");
        this.f20721d = name;
        this.f20722e = inputSelectComponentStyle;
        this.f20723i = selectedOptions;
        this.f20724o = jsonLogicBoolean;
        this.f20725p = jsonLogicBoolean2;
        this.f20726q = str;
        this.f20727r = str2;
        this.f20728s = options;
        this.f20729t = new ArrayList();
        this.f20730u = true;
        this.f20731v = new k(f());
    }

    public static /* synthetic */ d i(d dVar, String str, InputSelectComponentStyle inputSelectComponentStyle, List list, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str2, String str3, List list2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = dVar.f20721d;
        }
        if ((i10 & 2) != 0) {
            inputSelectComponentStyle = dVar.f20722e;
        }
        if ((i10 & 4) != 0) {
            list = dVar.f20723i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean = dVar.f20724o;
        }
        if ((i10 & 16) != 0) {
            jsonLogicBoolean2 = dVar.f20725p;
        }
        if ((i10 & 32) != 0) {
            str2 = dVar.f20726q;
        }
        if ((i10 & 64) != 0) {
            str3 = dVar.f20727r;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            list2 = dVar.f20728s;
        }
        String str4 = str3;
        List list3 = list2;
        JsonLogicBoolean jsonLogicBoolean3 = jsonLogicBoolean2;
        String str5 = str2;
        return dVar.g(str, inputSelectComponentStyle, list, jsonLogicBoolean, jsonLogicBoolean3, str5, str4, list3);
    }

    @Override // xp.a4
    public k a() {
        return this.f20731v;
    }

    @Override // xp.c2
    public List b() {
        return this.f20728s;
    }

    @Override // xp.c2
    public boolean c() {
        return this.f20730u;
    }

    @Override // xp.e0
    public List d() {
        return this.f20729t;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            return Intrinsics.areEqual(this.f20721d, dVar.f20721d) && Intrinsics.areEqual(this.f20722e, dVar.f20722e) && Intrinsics.areEqual(this.f20723i, dVar.f20723i) && Intrinsics.areEqual(this.f20724o, dVar.f20724o) && Intrinsics.areEqual(this.f20725p, dVar.f20725p) && Intrinsics.areEqual(this.f20726q, dVar.f20726q) && Intrinsics.areEqual(this.f20727r, dVar.f20727r) && Intrinsics.areEqual(this.f20728s, dVar.f20728s);
        }
        return false;
    }

    @Override // xp.c2
    public List f() {
        return this.f20723i;
    }

    public final d g(String name, InputSelectComponentStyle inputSelectComponentStyle, List selectedOptions, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str, String str2, List options) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(selectedOptions, "selectedOptions");
        Intrinsics.checkNotNullParameter(options, "options");
        return new d(name, inputSelectComponentStyle, selectedOptions, jsonLogicBoolean, jsonLogicBoolean2, str, str2, options);
    }

    @Override // xp.v
    public JsonLogicBoolean getDisabled() {
        return this.f20725p;
    }

    @Override // xp.e0
    public JsonLogicBoolean getHidden() {
        return this.f20724o;
    }

    @Override // xp.c2
    public String getLabel() {
        return this.f20726q;
    }

    @Override // xp.k5
    public String getName() {
        return this.f20721d;
    }

    public int hashCode() {
        int hashCode = this.f20721d.hashCode() * 31;
        InputSelectComponentStyle inputSelectComponentStyle = this.f20722e;
        int hashCode2 = (((hashCode + (inputSelectComponentStyle == null ? 0 : inputSelectComponentStyle.hashCode())) * 31) + this.f20723i.hashCode()) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f20724o;
        int hashCode3 = (hashCode2 + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20725p;
        int hashCode4 = (hashCode3 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31;
        String str = this.f20726q;
        int hashCode5 = (hashCode4 + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.f20727r;
        return ((hashCode5 + (str2 != null ? str2.hashCode() : 0)) * 31) + this.f20728s.hashCode();
    }

    @Override // xp.c2
    /* renamed from: j */
    public InputSelectComponentStyle getStyles() {
        return this.f20722e;
    }

    public void k(k kVar) {
        Intrinsics.checkNotNullParameter(kVar, "<set-?>");
        this.f20731v = kVar;
    }

    @Override // xp.a4
    /* renamed from: m */
    public d e(List selectedOptions) {
        Intrinsics.checkNotNullParameter(selectedOptions, "selectedOptions");
        d i10 = i(this, null, null, selectedOptions, null, null, null, null, null, 251, null);
        i10.k(a());
        return i10;
    }

    public String toString() {
        String str = this.f20721d;
        InputSelectComponentStyle inputSelectComponentStyle = this.f20722e;
        List list = this.f20723i;
        JsonLogicBoolean jsonLogicBoolean = this.f20724o;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20725p;
        String str2 = this.f20726q;
        String str3 = this.f20727r;
        List list2 = this.f20728s;
        return "InputMultiSelectComponent(name=" + str + ", styles=" + inputSelectComponentStyle + ", selectedOptions=" + list + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", label=" + str2 + ", placeholder=" + str3 + ", options=" + list2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f20721d);
        dest.writeParcelable(this.f20722e, i10);
        List<b4> list = this.f20723i;
        dest.writeInt(list.size());
        for (b4 b4Var : list) {
            b4Var.writeToParcel(dest, i10);
        }
        dest.writeParcelable(this.f20724o, i10);
        dest.writeParcelable(this.f20725p, i10);
        dest.writeString(this.f20726q);
        dest.writeString(this.f20727r);
        List<b4> list2 = this.f20728s;
        dest.writeInt(list2.size());
        for (b4 b4Var2 : list2) {
            b4Var2.writeToParcel(dest, i10);
        }
    }
}
