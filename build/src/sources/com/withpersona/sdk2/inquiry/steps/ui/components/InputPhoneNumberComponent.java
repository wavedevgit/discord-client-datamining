package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.g;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputPhoneNumber;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import dn.t;
import dn.w;
import fq.b4;
import fq.c2;
import fq.e0;
import fq.k5;
import fq.v;
import fq.w4;
import gq.j;
import gq.k;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0082\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0013\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010 \n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\t\b\u0087\b\u0018\u0000 _2\u00020\u00012\b\u0012\u0004\u0012\u00020\u00000\u00022\u00020\u00032\u00020\u0004:\u0001ZB?\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\b\u0012\b\u0010\n\u001a\u0004\u0018\u00010\b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u000e\u0010\u000fJ\u0017\u0010\u0011\u001a\u00020\u00002\u0006\u0010\u0010\u001a\u00020\u0005H\u0016¢\u0006\u0004\b\u0011\u0010\u0012J\u0017\u0010\u0015\u001a\u00020\u00002\b\u0010\u0014\u001a\u0004\u0018\u00010\u0013¢\u0006\u0004\b\u0015\u0010\u0016J\u001d\u0010\u001c\u001a\u00020\u001b2\u0006\u0010\u0018\u001a\u00020\u00172\u0006\u0010\u001a\u001a\u00020\u0019¢\u0006\u0004\b\u001c\u0010\u001dJ\r\u0010\u001e\u001a\u00020\u0019¢\u0006\u0004\b\u001e\u0010\u001fJT\u0010 \u001a\u00020\u00002\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0005HÆ\u0001¢\u0006\u0004\b \u0010!J\u0010\u0010\"\u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b\"\u0010#J\u0010\u0010$\u001a\u00020\u0019HÖ\u0001¢\u0006\u0004\b$\u0010\u001fJ\u001a\u0010(\u001a\u00020'2\b\u0010&\u001a\u0004\u0018\u00010%HÖ\u0003¢\u0006\u0004\b(\u0010)R\u001a\u0010\u0006\u001a\u00020\u00058\u0016X\u0096\u0004¢\u0006\f\n\u0004\b*\u0010+\u001a\u0004\b,\u0010#R\u0017\u0010\u0007\u001a\u00020\u00058\u0006¢\u0006\f\n\u0004\b-\u0010+\u001a\u0004\b.\u0010#R\u001c\u0010\t\u001a\u0004\u0018\u00010\b8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b/\u00100\u001a\u0004\b1\u00102R\u001c\u0010\n\u001a\u0004\u0018\u00010\b8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b3\u00100\u001a\u0004\b4\u00102R\u0019\u0010\f\u001a\u0004\u0018\u00010\u000b8\u0006¢\u0006\f\n\u0004\b\u0011\u00105\u001a\u0004\b6\u00107R$\u0010\r\u001a\u0004\u0018\u00010\u00058\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b\u0015\u0010+\u001a\u0004\b8\u0010#\"\u0004\b9\u0010:R&\u0010B\u001a\b\u0012\u0004\u0012\u00020<0;8\u0016X\u0096\u0004¢\u0006\u0012\n\u0004\b=\u0010>\u0012\u0004\b@\u0010A\u001a\u0004\b*\u0010?R\u001d\u0010H\u001a\u00020C8\u0006¢\u0006\u0012\n\u0004\bD\u0010E\u0012\u0004\bG\u0010A\u001a\u0004\b/\u0010FR(\u0010Q\u001a\u00020I8\u0006@\u0006X\u0086\u000e¢\u0006\u0018\n\u0004\bJ\u0010K\u0012\u0004\bP\u0010A\u001a\u0004\bL\u0010M\"\u0004\bN\u0010OR#\u0010V\u001a\b\u0012\u0004\u0012\u00020\u00130R8\u0006¢\u0006\u0012\n\u0004\bS\u0010>\u0012\u0004\bU\u0010A\u001a\u0004\bT\u0010?R(\u0010^\u001a\u00020W8\u0016@\u0016X\u0097\u000e¢\u0006\u0018\n\u0004\bX\u0010Y\u0012\u0004\b]\u0010A\u001a\u0004\bZ\u0010[\"\u0004\b3\u0010\\¨\u0006`"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputPhoneNumberComponent;", "Lfq/k5;", "Lfq/w4;", "Lfq/v;", "Lfq/e0;", "", StackTraceHelper.NAME_KEY, "value", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", ViewProps.HIDDEN, "disabled", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "errorTextStyle", "selectedCountryCode", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;Ljava/lang/String;)V", "newString", "p", "(Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputPhoneNumberComponent;", "Lfq/b4;", "selectedCountry", "q", "(Lfq/b4;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputPhoneNumberComponent;", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "c", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputPhoneNumberComponent;", "toString", "()Ljava/lang/String;", "hashCode", "", "other", "", "equals", "(Ljava/lang/Object;)Z", "d", "Ljava/lang/String;", "getName", "e", "getValue", "i", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "o", "getDisabled", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "j", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "l", "setSelectedCountryCode", "(Ljava/lang/String;)V", "", "Lnq/a;", "r", "Ljava/util/List;", "()Ljava/util/List;", "getAssociatedViews$annotations", "()V", "associatedViews", "Lfq/c2;", "s", "Lfq/c2;", "()Lfq/c2;", "getCountryCodeSelectComponent$annotations", "countryCodeSelectComponent", "Lgq/k;", "t", "Lgq/k;", "h", "()Lgq/k;", "setCountryCodeOptionsController", "(Lgq/k;)V", "getCountryCodeOptionsController$annotations", "countryCodeOptionsController", "", "u", "f", "getCountryCodeOptions$annotations", "countryCodeOptions", "Ldn/t;", "v", "Ldn/t;", "b", "()Ldn/t;", "(Ldn/t;)V", "getTextController$annotations", "textController", "w", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputPhoneNumberComponent implements k5, w4, v, e0 {

    /* renamed from: d  reason: collision with root package name */
    private final String f19657d;

    /* renamed from: e  reason: collision with root package name */
    private final String f19658e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f19659i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f19660o;

    /* renamed from: p  reason: collision with root package name */
    private final TextBasedComponentStyle f19661p;

    /* renamed from: q  reason: collision with root package name */
    private String f19662q;

    /* renamed from: r  reason: collision with root package name */
    private final List f19663r;

    /* renamed from: s  reason: collision with root package name */
    private final c2 f19664s;

    /* renamed from: t  reason: collision with root package name */
    private k f19665t;

    /* renamed from: u  reason: collision with root package name */
    private final List f19666u;

    /* renamed from: v  reason: collision with root package name */
    private t f19667v;

    /* renamed from: w  reason: collision with root package name */
    public static final b f19656w = new b(null);
    @NotNull
    public static final Parcelable.Creator<InputPhoneNumberComponent> CREATOR = new c();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c2 {
        a() {
        }

        @Override // fq.c2
        public List b() {
            return InputPhoneNumberComponent.this.f();
        }

        @Override // fq.c2
        public boolean c() {
            return false;
        }

        @Override // fq.c2
        public List f() {
            return CollectionsKt.e(gq.d.f25558a.g(InputPhoneNumberComponent.this.l()));
        }

        @Override // fq.c2
        public String getLabel() {
            return null;
        }

        @Override // fq.c2
        public InputSelectBoxComponentStyle getStyles() {
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final InputPhoneNumberComponent a(InputPhoneNumber config) {
            String a10;
            String str;
            String str2;
            JsonLogicBoolean jsonLogicBoolean;
            JsonLogicBoolean jsonLogicBoolean2;
            String prefill;
            Intrinsics.checkNotNullParameter(config, "config");
            InputPhoneNumber.Attributes attributes = config.getAttributes();
            String str3 = (attributes == null || (prefill = attributes.getPrefill()) == null || (str3 = StringsKt.k1(prefill).toString()) == null) ? "" : "";
            TextBasedComponentStyle textBasedComponentStyle = null;
            if (StringsKt.P(str3, "+", false, 2, null)) {
                j k10 = gq.d.f25558a.k(str3);
                String b10 = k10.b();
                str2 = k10.a();
                str = b10;
            } else {
                InputPhoneNumber.Attributes attributes2 = config.getAttributes();
                if (attributes2 == null || (a10 = attributes2.getCountryCode()) == null) {
                    a10 = gq.d.f25558a.j().a();
                }
                str = str3;
                str2 = a10;
            }
            String name = config.getName();
            InputPhoneNumber.Attributes attributes3 = config.getAttributes();
            if (attributes3 != null) {
                jsonLogicBoolean = attributes3.getHidden();
            } else {
                jsonLogicBoolean = null;
            }
            InputPhoneNumber.Attributes attributes4 = config.getAttributes();
            if (attributes4 != null) {
                jsonLogicBoolean2 = attributes4.getDisabled();
            } else {
                jsonLogicBoolean2 = null;
            }
            InputTextBasedComponentStyle styles = config.getStyles();
            if (styles != null) {
                textBasedComponentStyle = styles.getErrorTextStyle();
            }
            return new InputPhoneNumberComponent(name, str, jsonLogicBoolean, jsonLogicBoolean2, textBasedComponentStyle, str2);
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final InputPhoneNumberComponent createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new InputPhoneNumberComponent(parcel.readString(), parcel.readString(), (JsonLogicBoolean) parcel.readParcelable(InputPhoneNumberComponent.class.getClassLoader()), (JsonLogicBoolean) parcel.readParcelable(InputPhoneNumberComponent.class.getClassLoader()), (TextBasedComponentStyle) parcel.readParcelable(InputPhoneNumberComponent.class.getClassLoader()), parcel.readString());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final InputPhoneNumberComponent[] newArray(int i10) {
            return new InputPhoneNumberComponent[i10];
        }
    }

    public InputPhoneNumberComponent(String name, String value, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, TextBasedComponentStyle textBasedComponentStyle, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f19657d = name;
        this.f19658e = value;
        this.f19659i = jsonLogicBoolean;
        this.f19660o = jsonLogicBoolean2;
        this.f19661p = textBasedComponentStyle;
        this.f19662q = str;
        this.f19663r = new ArrayList();
        gq.d dVar = gq.d.f25558a;
        this.f19666u = dVar.f();
        this.f19664s = new a();
        this.f19665t = new k(dVar.g(this.f19662q));
        this.f19667v = w.a(value);
    }

    public static /* synthetic */ InputPhoneNumberComponent e(InputPhoneNumberComponent inputPhoneNumberComponent, String str, String str2, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, TextBasedComponentStyle textBasedComponentStyle, String str3, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = inputPhoneNumberComponent.f19657d;
        }
        if ((i10 & 2) != 0) {
            str2 = inputPhoneNumberComponent.f19658e;
        }
        if ((i10 & 4) != 0) {
            jsonLogicBoolean = inputPhoneNumberComponent.f19659i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean2 = inputPhoneNumberComponent.f19660o;
        }
        if ((i10 & 16) != 0) {
            textBasedComponentStyle = inputPhoneNumberComponent.f19661p;
        }
        if ((i10 & 32) != 0) {
            str3 = inputPhoneNumberComponent.f19662q;
        }
        TextBasedComponentStyle textBasedComponentStyle2 = textBasedComponentStyle;
        String str4 = str3;
        return inputPhoneNumberComponent.c(str, str2, jsonLogicBoolean, jsonLogicBoolean2, textBasedComponentStyle2, str4);
    }

    @g(ignore = true)
    public static /* synthetic */ void getTextController$annotations() {
    }

    @Override // fq.w4
    public t b() {
        return this.f19667v;
    }

    public final InputPhoneNumberComponent c(String name, String value, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, TextBasedComponentStyle textBasedComponentStyle, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        return new InputPhoneNumberComponent(name, value, jsonLogicBoolean, jsonLogicBoolean2, textBasedComponentStyle, str);
    }

    @Override // fq.e0
    public List d() {
        return this.f19663r;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof InputPhoneNumberComponent) {
            InputPhoneNumberComponent inputPhoneNumberComponent = (InputPhoneNumberComponent) obj;
            return Intrinsics.areEqual(this.f19657d, inputPhoneNumberComponent.f19657d) && Intrinsics.areEqual(this.f19658e, inputPhoneNumberComponent.f19658e) && Intrinsics.areEqual(this.f19659i, inputPhoneNumberComponent.f19659i) && Intrinsics.areEqual(this.f19660o, inputPhoneNumberComponent.f19660o) && Intrinsics.areEqual(this.f19661p, inputPhoneNumberComponent.f19661p) && Intrinsics.areEqual(this.f19662q, inputPhoneNumberComponent.f19662q);
        }
        return false;
    }

    public final List f() {
        return this.f19666u;
    }

    @Override // fq.v
    public JsonLogicBoolean getDisabled() {
        return this.f19660o;
    }

    @Override // fq.e0
    public JsonLogicBoolean getHidden() {
        return this.f19659i;
    }

    @Override // fq.k5
    public String getName() {
        return this.f19657d;
    }

    public final k h() {
        return this.f19665t;
    }

    public int hashCode() {
        int hashCode = ((this.f19657d.hashCode() * 31) + this.f19658e.hashCode()) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f19659i;
        int hashCode2 = (hashCode + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19660o;
        int hashCode3 = (hashCode2 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31;
        TextBasedComponentStyle textBasedComponentStyle = this.f19661p;
        int hashCode4 = (hashCode3 + (textBasedComponentStyle == null ? 0 : textBasedComponentStyle.hashCode())) * 31;
        String str = this.f19662q;
        return hashCode4 + (str != null ? str.hashCode() : 0);
    }

    public final c2 i() {
        return this.f19664s;
    }

    public final TextBasedComponentStyle j() {
        return this.f19661p;
    }

    public final String l() {
        return this.f19662q;
    }

    public void o(t tVar) {
        Intrinsics.checkNotNullParameter(tVar, "<set-?>");
        this.f19667v = tVar;
    }

    @Override // fq.w4
    /* renamed from: p */
    public InputPhoneNumberComponent a(String newString) {
        Intrinsics.checkNotNullParameter(newString, "newString");
        InputPhoneNumberComponent e10 = e(this, null, newString, null, null, null, null, 61, null);
        e10.o(b());
        e10.f19665t = this.f19665t;
        return e10;
    }

    public final InputPhoneNumberComponent q(b4 b4Var) {
        String str;
        if (b4Var != null) {
            str = gq.d.f25558a.e(b4Var);
        } else {
            str = null;
        }
        InputPhoneNumberComponent e10 = e(this, null, null, null, null, null, str, 31, null);
        e10.o(b());
        e10.f19665t = this.f19665t;
        return e10;
    }

    public String toString() {
        String str = this.f19657d;
        String str2 = this.f19658e;
        JsonLogicBoolean jsonLogicBoolean = this.f19659i;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19660o;
        TextBasedComponentStyle textBasedComponentStyle = this.f19661p;
        String str3 = this.f19662q;
        return "InputPhoneNumberComponent(name=" + str + ", value=" + str2 + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", errorTextStyle=" + textBasedComponentStyle + ", selectedCountryCode=" + str3 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f19657d);
        dest.writeString(this.f19658e);
        dest.writeParcelable(this.f19659i, i10);
        dest.writeParcelable(this.f19660o, i10);
        dest.writeParcelable(this.f19661p, i10);
        dest.writeString(this.f19662q);
    }
}
