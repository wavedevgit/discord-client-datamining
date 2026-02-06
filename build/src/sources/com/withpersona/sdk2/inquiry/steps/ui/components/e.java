package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputSelect;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Option;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import fq.a4;
import fq.b4;
import fq.c2;
import fq.e0;
import fq.k5;
import fq.v;
import gq.k;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements k5, a4, c2, v, e0 {

    /* renamed from: d  reason: collision with root package name */
    private final String f19734d;

    /* renamed from: e  reason: collision with root package name */
    private final InputSelectComponentStyle f19735e;

    /* renamed from: i  reason: collision with root package name */
    private final List f19736i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f19737o;

    /* renamed from: p  reason: collision with root package name */
    private final JsonLogicBoolean f19738p;

    /* renamed from: q  reason: collision with root package name */
    private final String f19739q;

    /* renamed from: r  reason: collision with root package name */
    private final String f19740r;

    /* renamed from: s  reason: collision with root package name */
    private final List f19741s;

    /* renamed from: t  reason: collision with root package name */
    private final List f19742t;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f19743u;

    /* renamed from: v  reason: collision with root package name */
    private k f19744v;

    /* renamed from: w  reason: collision with root package name */
    public static final a f19733w = new a(null);
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
        this.f19734d = name;
        this.f19735e = inputSelectComponentStyle;
        this.f19736i = selectedOptions;
        this.f19737o = jsonLogicBoolean;
        this.f19738p = jsonLogicBoolean2;
        this.f19739q = str;
        this.f19740r = str2;
        this.f19741s = options;
        this.f19742t = new ArrayList();
        this.f19744v = new k(f());
    }

    public static /* synthetic */ e i(e eVar, String str, InputSelectComponentStyle inputSelectComponentStyle, List list, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str2, String str3, List list2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = eVar.f19734d;
        }
        if ((i10 & 2) != 0) {
            inputSelectComponentStyle = eVar.f19735e;
        }
        if ((i10 & 4) != 0) {
            list = eVar.f19736i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean = eVar.f19737o;
        }
        if ((i10 & 16) != 0) {
            jsonLogicBoolean2 = eVar.f19738p;
        }
        if ((i10 & 32) != 0) {
            str2 = eVar.f19739q;
        }
        if ((i10 & 64) != 0) {
            str3 = eVar.f19740r;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            list2 = eVar.f19741s;
        }
        String str4 = str3;
        List list3 = list2;
        JsonLogicBoolean jsonLogicBoolean3 = jsonLogicBoolean2;
        String str5 = str2;
        return eVar.h(str, inputSelectComponentStyle, list, jsonLogicBoolean, jsonLogicBoolean3, str5, str4, list3);
    }

    @Override // fq.a4
    public k a() {
        return this.f19744v;
    }

    @Override // fq.c2
    public List b() {
        return this.f19741s;
    }

    @Override // fq.c2
    public boolean c() {
        return this.f19743u;
    }

    @Override // fq.e0
    public List d() {
        return this.f19742t;
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
            return Intrinsics.areEqual(this.f19734d, eVar.f19734d) && Intrinsics.areEqual(this.f19735e, eVar.f19735e) && Intrinsics.areEqual(this.f19736i, eVar.f19736i) && Intrinsics.areEqual(this.f19737o, eVar.f19737o) && Intrinsics.areEqual(this.f19738p, eVar.f19738p) && Intrinsics.areEqual(this.f19739q, eVar.f19739q) && Intrinsics.areEqual(this.f19740r, eVar.f19740r) && Intrinsics.areEqual(this.f19741s, eVar.f19741s);
        }
        return false;
    }

    @Override // fq.c2
    public List f() {
        return this.f19736i;
    }

    @Override // fq.v
    public JsonLogicBoolean getDisabled() {
        return this.f19738p;
    }

    @Override // fq.e0
    public JsonLogicBoolean getHidden() {
        return this.f19737o;
    }

    @Override // fq.c2
    public String getLabel() {
        return this.f19739q;
    }

    @Override // fq.k5
    public String getName() {
        return this.f19734d;
    }

    public final e h(String name, InputSelectComponentStyle inputSelectComponentStyle, List selectedOptions, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str, String str2, List options) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(selectedOptions, "selectedOptions");
        Intrinsics.checkNotNullParameter(options, "options");
        return new e(name, inputSelectComponentStyle, selectedOptions, jsonLogicBoolean, jsonLogicBoolean2, str, str2, options);
    }

    public int hashCode() {
        int hashCode = this.f19734d.hashCode() * 31;
        InputSelectComponentStyle inputSelectComponentStyle = this.f19735e;
        int hashCode2 = (((hashCode + (inputSelectComponentStyle == null ? 0 : inputSelectComponentStyle.hashCode())) * 31) + this.f19736i.hashCode()) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f19737o;
        int hashCode3 = (hashCode2 + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19738p;
        int hashCode4 = (hashCode3 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31;
        String str = this.f19739q;
        int hashCode5 = (hashCode4 + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.f19740r;
        return ((hashCode5 + (str2 != null ? str2.hashCode() : 0)) * 31) + this.f19741s.hashCode();
    }

    @Override // fq.c2
    /* renamed from: j */
    public InputSelectComponentStyle getStyles() {
        return this.f19735e;
    }

    public void l(k kVar) {
        Intrinsics.checkNotNullParameter(kVar, "<set-?>");
        this.f19744v = kVar;
    }

    @Override // fq.a4
    /* renamed from: o */
    public e e(List selectedOptions) {
        Intrinsics.checkNotNullParameter(selectedOptions, "selectedOptions");
        e i10 = i(this, null, null, CollectionsKt.a1(selectedOptions, 1), null, null, null, null, null, 251, null);
        i10.l(a());
        return i10;
    }

    public String toString() {
        String str = this.f19734d;
        InputSelectComponentStyle inputSelectComponentStyle = this.f19735e;
        List list = this.f19736i;
        JsonLogicBoolean jsonLogicBoolean = this.f19737o;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19738p;
        String str2 = this.f19739q;
        String str3 = this.f19740r;
        List list2 = this.f19741s;
        return "InputSelectComponent(name=" + str + ", styles=" + inputSelectComponentStyle + ", selectedOptions=" + list + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", label=" + str2 + ", placeholder=" + str3 + ", options=" + list2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f19734d);
        dest.writeParcelable(this.f19735e, i10);
        List<b4> list = this.f19736i;
        dest.writeInt(list.size());
        for (b4 b4Var : list) {
            b4Var.writeToParcel(dest, i10);
        }
        dest.writeParcelable(this.f19737o, i10);
        dest.writeParcelable(this.f19738p, i10);
        dest.writeString(this.f19739q);
        dest.writeString(this.f19740r);
        List<b4> list2 = this.f19741s;
        dest.writeInt(list2.size());
        for (b4 b4Var2 : list2) {
            b4Var2.writeToParcel(dest, i10);
        }
    }
}
