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
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import vm.t;
import vm.w;
import xp.b4;
import xp.c2;
import xp.e0;
import xp.k5;
import xp.v;
import xp.w4;
import yp.j;
import yp.k;
@Metadata(d1 = {"\u0000\u0082\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0014\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010 \n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\n\b\u0087\b\u0018\u0000 a2\u00020\u00012\b\u0012\u0004\u0012\u00020\u00000\u00022\u00020\u00032\u00020\u0004:\u0001[B?\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\b\u0012\b\u0010\n\u001a\u0004\u0018\u00010\b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u000e\u0010\u000fJ\u0017\u0010\u0011\u001a\u00020\u00002\u0006\u0010\u0010\u001a\u00020\u0005H\u0016¢\u0006\u0004\b\u0011\u0010\u0012J\u0017\u0010\u0015\u001a\u00020\u00002\b\u0010\u0014\u001a\u0004\u0018\u00010\u0013¢\u0006\u0004\b\u0015\u0010\u0016J\u001d\u0010\u001c\u001a\u00020\u001b2\u0006\u0010\u0018\u001a\u00020\u00172\u0006\u0010\u001a\u001a\u00020\u0019¢\u0006\u0004\b\u001c\u0010\u001dJ\r\u0010\u001e\u001a\u00020\u0019¢\u0006\u0004\b\u001e\u0010\u001fJT\u0010 \u001a\u00020\u00002\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0005HÆ\u0001¢\u0006\u0004\b \u0010!J\u0010\u0010\"\u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b\"\u0010#J\u0010\u0010$\u001a\u00020\u0019HÖ\u0001¢\u0006\u0004\b$\u0010\u001fJ\u001a\u0010(\u001a\u00020'2\b\u0010&\u001a\u0004\u0018\u00010%HÖ\u0003¢\u0006\u0004\b(\u0010)R\u001a\u0010\u0006\u001a\u00020\u00058\u0016X\u0096\u0004¢\u0006\f\n\u0004\b*\u0010+\u001a\u0004\b,\u0010#R\u0017\u0010\u0007\u001a\u00020\u00058\u0006¢\u0006\f\n\u0004\b-\u0010+\u001a\u0004\b.\u0010#R\u001c\u0010\t\u001a\u0004\u0018\u00010\b8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b/\u00100\u001a\u0004\b1\u00102R\u001c\u0010\n\u001a\u0004\u0018\u00010\b8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b\u0015\u00100\u001a\u0004\b3\u00102R\u0019\u0010\f\u001a\u0004\u0018\u00010\u000b8\u0006¢\u0006\f\n\u0004\b4\u00105\u001a\u0004\b6\u00107R$\u0010\r\u001a\u0004\u0018\u00010\u00058\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b8\u0010+\u001a\u0004\b9\u0010#\"\u0004\b:\u0010;R&\u0010C\u001a\b\u0012\u0004\u0012\u00020=0<8\u0016X\u0096\u0004¢\u0006\u0012\n\u0004\b>\u0010?\u0012\u0004\bA\u0010B\u001a\u0004\b*\u0010@R\u001d\u0010I\u001a\u00020D8\u0006¢\u0006\u0012\n\u0004\bE\u0010F\u0012\u0004\bH\u0010B\u001a\u0004\b/\u0010GR(\u0010R\u001a\u00020J8\u0006@\u0006X\u0086\u000e¢\u0006\u0018\n\u0004\bK\u0010L\u0012\u0004\bQ\u0010B\u001a\u0004\bM\u0010N\"\u0004\bO\u0010PR#\u0010W\u001a\b\u0012\u0004\u0012\u00020\u00130S8\u0006¢\u0006\u0012\n\u0004\bT\u0010?\u0012\u0004\bV\u0010B\u001a\u0004\bU\u0010@R(\u0010`\u001a\u00020X8\u0016@\u0016X\u0097\u000e¢\u0006\u0018\n\u0004\bY\u0010Z\u0012\u0004\b_\u0010B\u001a\u0004\b[\u0010\\\"\u0004\b]\u0010^¨\u0006b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputPhoneNumberComponent;", "Lxp/k5;", "Lxp/w4;", "Lxp/v;", "Lxp/e0;", "", StackTraceHelper.NAME_KEY, "value", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", ViewProps.HIDDEN, "disabled", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "errorTextStyle", "selectedCountryCode", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;Ljava/lang/String;)V", "newString", "n", "(Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputPhoneNumberComponent;", "Lxp/b4;", "selectedCountry", "o", "(Lxp/b4;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputPhoneNumberComponent;", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "c", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputPhoneNumberComponent;", "toString", "()Ljava/lang/String;", "hashCode", "", "other", "", "equals", "(Ljava/lang/Object;)Z", "d", "Ljava/lang/String;", "getName", "e", "getValue", "i", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getDisabled", "p", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "j", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "q", "k", "setSelectedCountryCode", "(Ljava/lang/String;)V", "", "Lfq/a;", "r", "Ljava/util/List;", "()Ljava/util/List;", "getAssociatedViews$annotations", "()V", "associatedViews", "Lxp/c2;", "s", "Lxp/c2;", "()Lxp/c2;", "getCountryCodeSelectComponent$annotations", "countryCodeSelectComponent", "Lyp/k;", "t", "Lyp/k;", "g", "()Lyp/k;", "setCountryCodeOptionsController", "(Lyp/k;)V", "getCountryCodeOptionsController$annotations", "countryCodeOptionsController", "", "u", "f", "getCountryCodeOptions$annotations", "countryCodeOptions", "Lvm/t;", "v", "Lvm/t;", "b", "()Lvm/t;", "m", "(Lvm/t;)V", "getTextController$annotations", "textController", "w", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputPhoneNumberComponent implements k5, w4, v, e0 {

    /* renamed from: d  reason: collision with root package name */
    private final String f20656d;

    /* renamed from: e  reason: collision with root package name */
    private final String f20657e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f20658i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f20659o;

    /* renamed from: p  reason: collision with root package name */
    private final TextBasedComponentStyle f20660p;

    /* renamed from: q  reason: collision with root package name */
    private String f20661q;

    /* renamed from: r  reason: collision with root package name */
    private final List f20662r;

    /* renamed from: s  reason: collision with root package name */
    private final c2 f20663s;

    /* renamed from: t  reason: collision with root package name */
    private k f20664t;

    /* renamed from: u  reason: collision with root package name */
    private final List f20665u;

    /* renamed from: v  reason: collision with root package name */
    private t f20666v;

    /* renamed from: w  reason: collision with root package name */
    public static final b f20655w = new b(null);
    @NotNull
    public static final Parcelable.Creator<InputPhoneNumberComponent> CREATOR = new c();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c2 {
        a() {
        }

        @Override // xp.c2
        public List b() {
            return InputPhoneNumberComponent.this.f();
        }

        @Override // xp.c2
        public boolean c() {
            return false;
        }

        @Override // xp.c2
        public List f() {
            return CollectionsKt.e(yp.d.f54935a.g(InputPhoneNumberComponent.this.k()));
        }

        @Override // xp.c2
        public String getLabel() {
            return null;
        }

        @Override // xp.c2
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
                j k10 = yp.d.f54935a.k(str3);
                String b10 = k10.b();
                str2 = k10.a();
                str = b10;
            } else {
                InputPhoneNumber.Attributes attributes2 = config.getAttributes();
                if (attributes2 == null || (a10 = attributes2.getCountryCode()) == null) {
                    a10 = yp.d.f54935a.j().a();
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
        this.f20656d = name;
        this.f20657e = value;
        this.f20658i = jsonLogicBoolean;
        this.f20659o = jsonLogicBoolean2;
        this.f20660p = textBasedComponentStyle;
        this.f20661q = str;
        this.f20662r = new ArrayList();
        yp.d dVar = yp.d.f54935a;
        this.f20665u = dVar.f();
        this.f20663s = new a();
        this.f20664t = new k(dVar.g(this.f20661q));
        this.f20666v = w.a(value);
    }

    public static /* synthetic */ InputPhoneNumberComponent e(InputPhoneNumberComponent inputPhoneNumberComponent, String str, String str2, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, TextBasedComponentStyle textBasedComponentStyle, String str3, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = inputPhoneNumberComponent.f20656d;
        }
        if ((i10 & 2) != 0) {
            str2 = inputPhoneNumberComponent.f20657e;
        }
        if ((i10 & 4) != 0) {
            jsonLogicBoolean = inputPhoneNumberComponent.f20658i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean2 = inputPhoneNumberComponent.f20659o;
        }
        if ((i10 & 16) != 0) {
            textBasedComponentStyle = inputPhoneNumberComponent.f20660p;
        }
        if ((i10 & 32) != 0) {
            str3 = inputPhoneNumberComponent.f20661q;
        }
        TextBasedComponentStyle textBasedComponentStyle2 = textBasedComponentStyle;
        String str4 = str3;
        return inputPhoneNumberComponent.c(str, str2, jsonLogicBoolean, jsonLogicBoolean2, textBasedComponentStyle2, str4);
    }

    @g(ignore = true)
    public static /* synthetic */ void getTextController$annotations() {
    }

    @Override // xp.w4
    public t b() {
        return this.f20666v;
    }

    public final InputPhoneNumberComponent c(String name, String value, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, TextBasedComponentStyle textBasedComponentStyle, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        return new InputPhoneNumberComponent(name, value, jsonLogicBoolean, jsonLogicBoolean2, textBasedComponentStyle, str);
    }

    @Override // xp.e0
    public List d() {
        return this.f20662r;
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
            return Intrinsics.areEqual(this.f20656d, inputPhoneNumberComponent.f20656d) && Intrinsics.areEqual(this.f20657e, inputPhoneNumberComponent.f20657e) && Intrinsics.areEqual(this.f20658i, inputPhoneNumberComponent.f20658i) && Intrinsics.areEqual(this.f20659o, inputPhoneNumberComponent.f20659o) && Intrinsics.areEqual(this.f20660p, inputPhoneNumberComponent.f20660p) && Intrinsics.areEqual(this.f20661q, inputPhoneNumberComponent.f20661q);
        }
        return false;
    }

    public final List f() {
        return this.f20665u;
    }

    public final k g() {
        return this.f20664t;
    }

    @Override // xp.v
    public JsonLogicBoolean getDisabled() {
        return this.f20659o;
    }

    @Override // xp.e0
    public JsonLogicBoolean getHidden() {
        return this.f20658i;
    }

    @Override // xp.k5
    public String getName() {
        return this.f20656d;
    }

    public int hashCode() {
        int hashCode = ((this.f20656d.hashCode() * 31) + this.f20657e.hashCode()) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f20658i;
        int hashCode2 = (hashCode + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20659o;
        int hashCode3 = (hashCode2 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31;
        TextBasedComponentStyle textBasedComponentStyle = this.f20660p;
        int hashCode4 = (hashCode3 + (textBasedComponentStyle == null ? 0 : textBasedComponentStyle.hashCode())) * 31;
        String str = this.f20661q;
        return hashCode4 + (str != null ? str.hashCode() : 0);
    }

    public final c2 i() {
        return this.f20663s;
    }

    public final TextBasedComponentStyle j() {
        return this.f20660p;
    }

    public final String k() {
        return this.f20661q;
    }

    public void m(t tVar) {
        Intrinsics.checkNotNullParameter(tVar, "<set-?>");
        this.f20666v = tVar;
    }

    @Override // xp.w4
    /* renamed from: n */
    public InputPhoneNumberComponent a(String newString) {
        Intrinsics.checkNotNullParameter(newString, "newString");
        InputPhoneNumberComponent e10 = e(this, null, newString, null, null, null, null, 61, null);
        e10.m(b());
        e10.f20664t = this.f20664t;
        return e10;
    }

    public final InputPhoneNumberComponent o(b4 b4Var) {
        String str;
        if (b4Var != null) {
            str = yp.d.f54935a.e(b4Var);
        } else {
            str = null;
        }
        InputPhoneNumberComponent e10 = e(this, null, null, null, null, null, str, 31, null);
        e10.m(b());
        e10.f20664t = this.f20664t;
        return e10;
    }

    public String toString() {
        String str = this.f20656d;
        String str2 = this.f20657e;
        JsonLogicBoolean jsonLogicBoolean = this.f20658i;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20659o;
        TextBasedComponentStyle textBasedComponentStyle = this.f20660p;
        String str3 = this.f20661q;
        return "InputPhoneNumberComponent(name=" + str + ", value=" + str2 + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", errorTextStyle=" + textBasedComponentStyle + ", selectedCountryCode=" + str3 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f20656d);
        dest.writeString(this.f20657e);
        dest.writeParcelable(this.f20658i, i10);
        dest.writeParcelable(this.f20659o, i10);
        dest.writeParcelable(this.f20660p, i10);
        dest.writeString(this.f20661q);
    }
}
