package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import bn.t;
import bn.w;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.g;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputPhoneNumber;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import dq.b4;
import dq.c2;
import dq.e0;
import dq.k5;
import dq.v;
import dq.w4;
import eq.j;
import eq.k;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0082\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0013\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010 \n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\n\b\u0087\b\u0018\u0000 `2\u00020\u00012\b\u0012\u0004\u0012\u00020\u00000\u00022\u00020\u00032\u00020\u0004:\u0001ZB?\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\b\u0012\b\u0010\n\u001a\u0004\u0018\u00010\b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u000e\u0010\u000fJ\u0017\u0010\u0011\u001a\u00020\u00002\u0006\u0010\u0010\u001a\u00020\u0005H\u0016¢\u0006\u0004\b\u0011\u0010\u0012J\u0017\u0010\u0015\u001a\u00020\u00002\b\u0010\u0014\u001a\u0004\u0018\u00010\u0013¢\u0006\u0004\b\u0015\u0010\u0016J\u001d\u0010\u001c\u001a\u00020\u001b2\u0006\u0010\u0018\u001a\u00020\u00172\u0006\u0010\u001a\u001a\u00020\u0019¢\u0006\u0004\b\u001c\u0010\u001dJ\r\u0010\u001e\u001a\u00020\u0019¢\u0006\u0004\b\u001e\u0010\u001fJT\u0010 \u001a\u00020\u00002\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0005HÆ\u0001¢\u0006\u0004\b \u0010!J\u0010\u0010\"\u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b\"\u0010#J\u0010\u0010$\u001a\u00020\u0019HÖ\u0001¢\u0006\u0004\b$\u0010\u001fJ\u001a\u0010(\u001a\u00020'2\b\u0010&\u001a\u0004\u0018\u00010%HÖ\u0003¢\u0006\u0004\b(\u0010)R\u001a\u0010\u0006\u001a\u00020\u00058\u0016X\u0096\u0004¢\u0006\f\n\u0004\b*\u0010+\u001a\u0004\b,\u0010#R\u0017\u0010\u0007\u001a\u00020\u00058\u0006¢\u0006\f\n\u0004\b-\u0010+\u001a\u0004\b.\u0010#R\u001c\u0010\t\u001a\u0004\u0018\u00010\b8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b/\u00100\u001a\u0004\b1\u00102R\u001c\u0010\n\u001a\u0004\u0018\u00010\b8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b\u0011\u00100\u001a\u0004\b3\u00102R\u0019\u0010\f\u001a\u0004\u0018\u00010\u000b8\u0006¢\u0006\f\n\u0004\b\u0015\u00104\u001a\u0004\b5\u00106R$\u0010\r\u001a\u0004\u0018\u00010\u00058\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b7\u0010+\u001a\u0004\b8\u0010#\"\u0004\b9\u0010:R&\u0010B\u001a\b\u0012\u0004\u0012\u00020<0;8\u0016X\u0096\u0004¢\u0006\u0012\n\u0004\b=\u0010>\u0012\u0004\b@\u0010A\u001a\u0004\b*\u0010?R\u001d\u0010H\u001a\u00020C8\u0006¢\u0006\u0012\n\u0004\bD\u0010E\u0012\u0004\bG\u0010A\u001a\u0004\b/\u0010FR(\u0010Q\u001a\u00020I8\u0006@\u0006X\u0086\u000e¢\u0006\u0018\n\u0004\bJ\u0010K\u0012\u0004\bP\u0010A\u001a\u0004\bL\u0010M\"\u0004\bN\u0010OR#\u0010V\u001a\b\u0012\u0004\u0012\u00020\u00130R8\u0006¢\u0006\u0012\n\u0004\bS\u0010>\u0012\u0004\bU\u0010A\u001a\u0004\bT\u0010?R(\u0010_\u001a\u00020W8\u0016@\u0016X\u0097\u000e¢\u0006\u0018\n\u0004\bX\u0010Y\u0012\u0004\b^\u0010A\u001a\u0004\bZ\u0010[\"\u0004\b\\\u0010]¨\u0006a"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputPhoneNumberComponent;", "Ldq/k5;", "Ldq/w4;", "Ldq/v;", "Ldq/e0;", "", StackTraceHelper.NAME_KEY, "value", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", ViewProps.HIDDEN, "disabled", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "errorTextStyle", "selectedCountryCode", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;Ljava/lang/String;)V", "newString", "o", "(Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputPhoneNumberComponent;", "Ldq/b4;", "selectedCountry", "p", "(Ldq/b4;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputPhoneNumberComponent;", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "c", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputPhoneNumberComponent;", "toString", "()Ljava/lang/String;", "hashCode", "", "other", "", "equals", "(Ljava/lang/Object;)Z", "d", "Ljava/lang/String;", "getName", "e", "getValue", "i", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getDisabled", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "j", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/TextBasedComponentStyle;", "q", "l", "setSelectedCountryCode", "(Ljava/lang/String;)V", "", "Llq/a;", "r", "Ljava/util/List;", "()Ljava/util/List;", "getAssociatedViews$annotations", "()V", "associatedViews", "Ldq/c2;", "s", "Ldq/c2;", "()Ldq/c2;", "getCountryCodeSelectComponent$annotations", "countryCodeSelectComponent", "Leq/k;", "t", "Leq/k;", "g", "()Leq/k;", "setCountryCodeOptionsController", "(Leq/k;)V", "getCountryCodeOptionsController$annotations", "countryCodeOptionsController", "", "u", "f", "getCountryCodeOptions$annotations", "countryCodeOptions", "Lbn/t;", "v", "Lbn/t;", "b", "()Lbn/t;", "n", "(Lbn/t;)V", "getTextController$annotations", "textController", "w", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputPhoneNumberComponent implements k5, w4, v, e0 {

    /* renamed from: d  reason: collision with root package name */
    private final String f19677d;

    /* renamed from: e  reason: collision with root package name */
    private final String f19678e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f19679i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f19680o;

    /* renamed from: p  reason: collision with root package name */
    private final TextBasedComponentStyle f19681p;

    /* renamed from: q  reason: collision with root package name */
    private String f19682q;

    /* renamed from: r  reason: collision with root package name */
    private final List f19683r;

    /* renamed from: s  reason: collision with root package name */
    private final c2 f19684s;

    /* renamed from: t  reason: collision with root package name */
    private k f19685t;

    /* renamed from: u  reason: collision with root package name */
    private final List f19686u;

    /* renamed from: v  reason: collision with root package name */
    private t f19687v;

    /* renamed from: w  reason: collision with root package name */
    public static final b f19676w = new b(null);
    @NotNull
    public static final Parcelable.Creator<InputPhoneNumberComponent> CREATOR = new c();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c2 {
        a() {
        }

        @Override // dq.c2
        public List b() {
            return InputPhoneNumberComponent.this.f();
        }

        @Override // dq.c2
        public boolean c() {
            return false;
        }

        @Override // dq.c2
        public List f() {
            return CollectionsKt.e(eq.d.f21755a.g(InputPhoneNumberComponent.this.l()));
        }

        @Override // dq.c2
        public String getLabel() {
            return null;
        }

        @Override // dq.c2
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
                j k10 = eq.d.f21755a.k(str3);
                String b10 = k10.b();
                str2 = k10.a();
                str = b10;
            } else {
                InputPhoneNumber.Attributes attributes2 = config.getAttributes();
                if (attributes2 == null || (a10 = attributes2.getCountryCode()) == null) {
                    a10 = eq.d.f21755a.j().a();
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
        this.f19677d = name;
        this.f19678e = value;
        this.f19679i = jsonLogicBoolean;
        this.f19680o = jsonLogicBoolean2;
        this.f19681p = textBasedComponentStyle;
        this.f19682q = str;
        this.f19683r = new ArrayList();
        eq.d dVar = eq.d.f21755a;
        this.f19686u = dVar.f();
        this.f19684s = new a();
        this.f19685t = new k(dVar.g(this.f19682q));
        this.f19687v = w.a(value);
    }

    public static /* synthetic */ InputPhoneNumberComponent e(InputPhoneNumberComponent inputPhoneNumberComponent, String str, String str2, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, TextBasedComponentStyle textBasedComponentStyle, String str3, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = inputPhoneNumberComponent.f19677d;
        }
        if ((i10 & 2) != 0) {
            str2 = inputPhoneNumberComponent.f19678e;
        }
        if ((i10 & 4) != 0) {
            jsonLogicBoolean = inputPhoneNumberComponent.f19679i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean2 = inputPhoneNumberComponent.f19680o;
        }
        if ((i10 & 16) != 0) {
            textBasedComponentStyle = inputPhoneNumberComponent.f19681p;
        }
        if ((i10 & 32) != 0) {
            str3 = inputPhoneNumberComponent.f19682q;
        }
        TextBasedComponentStyle textBasedComponentStyle2 = textBasedComponentStyle;
        String str4 = str3;
        return inputPhoneNumberComponent.c(str, str2, jsonLogicBoolean, jsonLogicBoolean2, textBasedComponentStyle2, str4);
    }

    @g(ignore = true)
    public static /* synthetic */ void getTextController$annotations() {
    }

    @Override // dq.w4
    public t b() {
        return this.f19687v;
    }

    public final InputPhoneNumberComponent c(String name, String value, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, TextBasedComponentStyle textBasedComponentStyle, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        return new InputPhoneNumberComponent(name, value, jsonLogicBoolean, jsonLogicBoolean2, textBasedComponentStyle, str);
    }

    @Override // dq.e0
    public List d() {
        return this.f19683r;
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
            return Intrinsics.areEqual(this.f19677d, inputPhoneNumberComponent.f19677d) && Intrinsics.areEqual(this.f19678e, inputPhoneNumberComponent.f19678e) && Intrinsics.areEqual(this.f19679i, inputPhoneNumberComponent.f19679i) && Intrinsics.areEqual(this.f19680o, inputPhoneNumberComponent.f19680o) && Intrinsics.areEqual(this.f19681p, inputPhoneNumberComponent.f19681p) && Intrinsics.areEqual(this.f19682q, inputPhoneNumberComponent.f19682q);
        }
        return false;
    }

    public final List f() {
        return this.f19686u;
    }

    public final k g() {
        return this.f19685t;
    }

    @Override // dq.v
    public JsonLogicBoolean getDisabled() {
        return this.f19680o;
    }

    @Override // dq.e0
    public JsonLogicBoolean getHidden() {
        return this.f19679i;
    }

    @Override // dq.k5
    public String getName() {
        return this.f19677d;
    }

    public int hashCode() {
        int hashCode = ((this.f19677d.hashCode() * 31) + this.f19678e.hashCode()) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f19679i;
        int hashCode2 = (hashCode + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19680o;
        int hashCode3 = (hashCode2 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31;
        TextBasedComponentStyle textBasedComponentStyle = this.f19681p;
        int hashCode4 = (hashCode3 + (textBasedComponentStyle == null ? 0 : textBasedComponentStyle.hashCode())) * 31;
        String str = this.f19682q;
        return hashCode4 + (str != null ? str.hashCode() : 0);
    }

    public final c2 i() {
        return this.f19684s;
    }

    public final TextBasedComponentStyle j() {
        return this.f19681p;
    }

    public final String l() {
        return this.f19682q;
    }

    public void n(t tVar) {
        Intrinsics.checkNotNullParameter(tVar, "<set-?>");
        this.f19687v = tVar;
    }

    @Override // dq.w4
    /* renamed from: o */
    public InputPhoneNumberComponent a(String newString) {
        Intrinsics.checkNotNullParameter(newString, "newString");
        InputPhoneNumberComponent e10 = e(this, null, newString, null, null, null, null, 61, null);
        e10.n(b());
        e10.f19685t = this.f19685t;
        return e10;
    }

    public final InputPhoneNumberComponent p(b4 b4Var) {
        String str;
        if (b4Var != null) {
            str = eq.d.f21755a.e(b4Var);
        } else {
            str = null;
        }
        InputPhoneNumberComponent e10 = e(this, null, null, null, null, null, str, 31, null);
        e10.n(b());
        e10.f19685t = this.f19685t;
        return e10;
    }

    public String toString() {
        String str = this.f19677d;
        String str2 = this.f19678e;
        JsonLogicBoolean jsonLogicBoolean = this.f19679i;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19680o;
        TextBasedComponentStyle textBasedComponentStyle = this.f19681p;
        String str3 = this.f19682q;
        return "InputPhoneNumberComponent(name=" + str + ", value=" + str2 + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", errorTextStyle=" + textBasedComponentStyle + ", selectedCountryCode=" + str3 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f19677d);
        dest.writeString(this.f19678e);
        dest.writeParcelable(this.f19679i, i10);
        dest.writeParcelable(this.f19680o, i10);
        dest.writeParcelable(this.f19681p, i10);
        dest.writeString(this.f19682q);
    }
}
