package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
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
import xp.a4;
import xp.b4;
import xp.c2;
import xp.e0;
import xp.k5;
import xp.v;
import yp.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements k5, a4, c2, v, e0 {

    /* renamed from: d  reason: collision with root package name */
    private final String f20733d;

    /* renamed from: e  reason: collision with root package name */
    private final InputSelectComponentStyle f20734e;

    /* renamed from: i  reason: collision with root package name */
    private final List f20735i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f20736o;

    /* renamed from: p  reason: collision with root package name */
    private final JsonLogicBoolean f20737p;

    /* renamed from: q  reason: collision with root package name */
    private final String f20738q;

    /* renamed from: r  reason: collision with root package name */
    private final String f20739r;

    /* renamed from: s  reason: collision with root package name */
    private final List f20740s;

    /* renamed from: t  reason: collision with root package name */
    private final List f20741t;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f20742u;

    /* renamed from: v  reason: collision with root package name */
    private k f20743v;

    /* renamed from: w  reason: collision with root package name */
    public static final a f20732w = new a(null);
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
        this.f20733d = name;
        this.f20734e = inputSelectComponentStyle;
        this.f20735i = selectedOptions;
        this.f20736o = jsonLogicBoolean;
        this.f20737p = jsonLogicBoolean2;
        this.f20738q = str;
        this.f20739r = str2;
        this.f20740s = options;
        this.f20741t = new ArrayList();
        this.f20743v = new k(f());
    }

    public static /* synthetic */ e i(e eVar, String str, InputSelectComponentStyle inputSelectComponentStyle, List list, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str2, String str3, List list2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = eVar.f20733d;
        }
        if ((i10 & 2) != 0) {
            inputSelectComponentStyle = eVar.f20734e;
        }
        if ((i10 & 4) != 0) {
            list = eVar.f20735i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean = eVar.f20736o;
        }
        if ((i10 & 16) != 0) {
            jsonLogicBoolean2 = eVar.f20737p;
        }
        if ((i10 & 32) != 0) {
            str2 = eVar.f20738q;
        }
        if ((i10 & 64) != 0) {
            str3 = eVar.f20739r;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            list2 = eVar.f20740s;
        }
        String str4 = str3;
        List list3 = list2;
        JsonLogicBoolean jsonLogicBoolean3 = jsonLogicBoolean2;
        String str5 = str2;
        return eVar.g(str, inputSelectComponentStyle, list, jsonLogicBoolean, jsonLogicBoolean3, str5, str4, list3);
    }

    @Override // xp.a4
    public k a() {
        return this.f20743v;
    }

    @Override // xp.c2
    public List b() {
        return this.f20740s;
    }

    @Override // xp.c2
    public boolean c() {
        return this.f20742u;
    }

    @Override // xp.e0
    public List d() {
        return this.f20741t;
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
            return Intrinsics.areEqual(this.f20733d, eVar.f20733d) && Intrinsics.areEqual(this.f20734e, eVar.f20734e) && Intrinsics.areEqual(this.f20735i, eVar.f20735i) && Intrinsics.areEqual(this.f20736o, eVar.f20736o) && Intrinsics.areEqual(this.f20737p, eVar.f20737p) && Intrinsics.areEqual(this.f20738q, eVar.f20738q) && Intrinsics.areEqual(this.f20739r, eVar.f20739r) && Intrinsics.areEqual(this.f20740s, eVar.f20740s);
        }
        return false;
    }

    @Override // xp.c2
    public List f() {
        return this.f20735i;
    }

    public final e g(String name, InputSelectComponentStyle inputSelectComponentStyle, List selectedOptions, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str, String str2, List options) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(selectedOptions, "selectedOptions");
        Intrinsics.checkNotNullParameter(options, "options");
        return new e(name, inputSelectComponentStyle, selectedOptions, jsonLogicBoolean, jsonLogicBoolean2, str, str2, options);
    }

    @Override // xp.v
    public JsonLogicBoolean getDisabled() {
        return this.f20737p;
    }

    @Override // xp.e0
    public JsonLogicBoolean getHidden() {
        return this.f20736o;
    }

    @Override // xp.c2
    public String getLabel() {
        return this.f20738q;
    }

    @Override // xp.k5
    public String getName() {
        return this.f20733d;
    }

    public int hashCode() {
        int hashCode = this.f20733d.hashCode() * 31;
        InputSelectComponentStyle inputSelectComponentStyle = this.f20734e;
        int hashCode2 = (((hashCode + (inputSelectComponentStyle == null ? 0 : inputSelectComponentStyle.hashCode())) * 31) + this.f20735i.hashCode()) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f20736o;
        int hashCode3 = (hashCode2 + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20737p;
        int hashCode4 = (hashCode3 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31;
        String str = this.f20738q;
        int hashCode5 = (hashCode4 + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.f20739r;
        return ((hashCode5 + (str2 != null ? str2.hashCode() : 0)) * 31) + this.f20740s.hashCode();
    }

    @Override // xp.c2
    /* renamed from: j */
    public InputSelectComponentStyle getStyles() {
        return this.f20734e;
    }

    public void k(k kVar) {
        Intrinsics.checkNotNullParameter(kVar, "<set-?>");
        this.f20743v = kVar;
    }

    @Override // xp.a4
    /* renamed from: m */
    public e e(List selectedOptions) {
        Intrinsics.checkNotNullParameter(selectedOptions, "selectedOptions");
        e i10 = i(this, null, null, CollectionsKt.a1(selectedOptions, 1), null, null, null, null, null, 251, null);
        i10.k(a());
        return i10;
    }

    public String toString() {
        String str = this.f20733d;
        InputSelectComponentStyle inputSelectComponentStyle = this.f20734e;
        List list = this.f20735i;
        JsonLogicBoolean jsonLogicBoolean = this.f20736o;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20737p;
        String str2 = this.f20738q;
        String str3 = this.f20739r;
        List list2 = this.f20740s;
        return "InputSelectComponent(name=" + str + ", styles=" + inputSelectComponentStyle + ", selectedOptions=" + list + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", label=" + str2 + ", placeholder=" + str3 + ", options=" + list2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f20733d);
        dest.writeParcelable(this.f20734e, i10);
        List<b4> list = this.f20735i;
        dest.writeInt(list.size());
        for (b4 b4Var : list) {
            b4Var.writeToParcel(dest, i10);
        }
        dest.writeParcelable(this.f20736o, i10);
        dest.writeParcelable(this.f20737p, i10);
        dest.writeString(this.f20738q);
        dest.writeString(this.f20739r);
        List<b4> list2 = this.f20740s;
        dest.writeInt(list2.size());
        for (b4 b4Var2 : list2) {
            b4Var2.writeToParcel(dest, i10);
        }
    }
}
