package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputMultiSelect;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Option;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import gq.a4;
import gq.b4;
import gq.c2;
import gq.e0;
import gq.k5;
import gq.v;
import hq.k;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements k5, a4, c2, v, e0 {

    /* renamed from: d  reason: collision with root package name */
    private final String f19862d;

    /* renamed from: e  reason: collision with root package name */
    private final InputSelectComponentStyle f19863e;

    /* renamed from: i  reason: collision with root package name */
    private final List f19864i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f19865o;

    /* renamed from: p  reason: collision with root package name */
    private final JsonLogicBoolean f19866p;

    /* renamed from: q  reason: collision with root package name */
    private final String f19867q;

    /* renamed from: r  reason: collision with root package name */
    private final String f19868r;

    /* renamed from: s  reason: collision with root package name */
    private final List f19869s;

    /* renamed from: t  reason: collision with root package name */
    private final List f19870t;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f19871u;

    /* renamed from: v  reason: collision with root package name */
    private k f19872v;

    /* renamed from: w  reason: collision with root package name */
    public static final a f19861w = new a(null);
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
        this.f19862d = name;
        this.f19863e = inputSelectComponentStyle;
        this.f19864i = selectedOptions;
        this.f19865o = jsonLogicBoolean;
        this.f19866p = jsonLogicBoolean2;
        this.f19867q = str;
        this.f19868r = str2;
        this.f19869s = options;
        this.f19870t = new ArrayList();
        this.f19871u = true;
        this.f19872v = new k(f());
    }

    public static /* synthetic */ d i(d dVar, String str, InputSelectComponentStyle inputSelectComponentStyle, List list, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str2, String str3, List list2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = dVar.f19862d;
        }
        if ((i10 & 2) != 0) {
            inputSelectComponentStyle = dVar.f19863e;
        }
        if ((i10 & 4) != 0) {
            list = dVar.f19864i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean = dVar.f19865o;
        }
        if ((i10 & 16) != 0) {
            jsonLogicBoolean2 = dVar.f19866p;
        }
        if ((i10 & 32) != 0) {
            str2 = dVar.f19867q;
        }
        if ((i10 & 64) != 0) {
            str3 = dVar.f19868r;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            list2 = dVar.f19869s;
        }
        String str4 = str3;
        List list3 = list2;
        JsonLogicBoolean jsonLogicBoolean3 = jsonLogicBoolean2;
        String str5 = str2;
        return dVar.h(str, inputSelectComponentStyle, list, jsonLogicBoolean, jsonLogicBoolean3, str5, str4, list3);
    }

    @Override // gq.a4
    public k a() {
        return this.f19872v;
    }

    @Override // gq.c2
    public List b() {
        return this.f19869s;
    }

    @Override // gq.c2
    public boolean c() {
        return this.f19871u;
    }

    @Override // gq.e0
    public List d() {
        return this.f19870t;
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
            return Intrinsics.areEqual(this.f19862d, dVar.f19862d) && Intrinsics.areEqual(this.f19863e, dVar.f19863e) && Intrinsics.areEqual(this.f19864i, dVar.f19864i) && Intrinsics.areEqual(this.f19865o, dVar.f19865o) && Intrinsics.areEqual(this.f19866p, dVar.f19866p) && Intrinsics.areEqual(this.f19867q, dVar.f19867q) && Intrinsics.areEqual(this.f19868r, dVar.f19868r) && Intrinsics.areEqual(this.f19869s, dVar.f19869s);
        }
        return false;
    }

    @Override // gq.c2
    public List f() {
        return this.f19864i;
    }

    @Override // gq.v
    public JsonLogicBoolean getDisabled() {
        return this.f19866p;
    }

    @Override // gq.e0
    public JsonLogicBoolean getHidden() {
        return this.f19865o;
    }

    @Override // gq.c2
    public String getLabel() {
        return this.f19867q;
    }

    @Override // gq.k5
    public String getName() {
        return this.f19862d;
    }

    public final d h(String name, InputSelectComponentStyle inputSelectComponentStyle, List selectedOptions, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str, String str2, List options) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(selectedOptions, "selectedOptions");
        Intrinsics.checkNotNullParameter(options, "options");
        return new d(name, inputSelectComponentStyle, selectedOptions, jsonLogicBoolean, jsonLogicBoolean2, str, str2, options);
    }

    public int hashCode() {
        int hashCode = this.f19862d.hashCode() * 31;
        InputSelectComponentStyle inputSelectComponentStyle = this.f19863e;
        int hashCode2 = (((hashCode + (inputSelectComponentStyle == null ? 0 : inputSelectComponentStyle.hashCode())) * 31) + this.f19864i.hashCode()) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f19865o;
        int hashCode3 = (hashCode2 + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19866p;
        int hashCode4 = (hashCode3 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31;
        String str = this.f19867q;
        int hashCode5 = (hashCode4 + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.f19868r;
        return ((hashCode5 + (str2 != null ? str2.hashCode() : 0)) * 31) + this.f19869s.hashCode();
    }

    @Override // gq.c2
    /* renamed from: j */
    public InputSelectComponentStyle getStyles() {
        return this.f19863e;
    }

    public void l(k kVar) {
        Intrinsics.checkNotNullParameter(kVar, "<set-?>");
        this.f19872v = kVar;
    }

    @Override // gq.a4
    /* renamed from: o */
    public d e(List selectedOptions) {
        Intrinsics.checkNotNullParameter(selectedOptions, "selectedOptions");
        d i10 = i(this, null, null, selectedOptions, null, null, null, null, null, 251, null);
        i10.l(a());
        return i10;
    }

    public String toString() {
        String str = this.f19862d;
        InputSelectComponentStyle inputSelectComponentStyle = this.f19863e;
        List list = this.f19864i;
        JsonLogicBoolean jsonLogicBoolean = this.f19865o;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19866p;
        String str2 = this.f19867q;
        String str3 = this.f19868r;
        List list2 = this.f19869s;
        return "InputMultiSelectComponent(name=" + str + ", styles=" + inputSelectComponentStyle + ", selectedOptions=" + list + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", label=" + str2 + ", placeholder=" + str3 + ", options=" + list2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f19862d);
        dest.writeParcelable(this.f19863e, i10);
        List<b4> list = this.f19864i;
        dest.writeInt(list.size());
        for (b4 b4Var : list) {
            b4Var.writeToParcel(dest, i10);
        }
        dest.writeParcelable(this.f19865o, i10);
        dest.writeParcelable(this.f19866p, i10);
        dest.writeString(this.f19867q);
        dest.writeString(this.f19868r);
        List<b4> list2 = this.f19869s;
        dest.writeInt(list2.size());
        for (b4 b4Var2 : list2) {
            b4Var2.writeToParcel(dest, i10);
        }
    }
}
