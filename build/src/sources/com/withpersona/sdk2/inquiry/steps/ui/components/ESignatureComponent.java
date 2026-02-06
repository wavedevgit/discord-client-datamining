package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.graphics.Bitmap;
import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.g;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import fq.e0;
import fq.k5;
import fq.v;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000h\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0014\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\t\b\u0087\b\u0018\u00002\u00020\u00012\b\u0012\u0004\u0012\u00020\u00000\u00022\u00020\u00032\u00020\u0004B#\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\n\u0010\u000bB\u0011\b\u0016\u0012\u0006\u0010\r\u001a\u00020\f¢\u0006\u0004\b\n\u0010\u000eJ\u0019\u0010\u0011\u001a\u00020\u00002\b\u0010\u0010\u001a\u0004\u0018\u00010\u000fH\u0016¢\u0006\u0004\b\u0011\u0010\u0012J\u001d\u0010\u0018\u001a\u00020\u00172\u0006\u0010\u0014\u001a\u00020\u00132\u0006\u0010\u0016\u001a\u00020\u0015¢\u0006\u0004\b\u0018\u0010\u0019J\r\u0010\u001a\u001a\u00020\u0015¢\u0006\u0004\b\u001a\u0010\u001bJ2\u0010\u001c\u001a\u00020\u00002\b\b\u0002\u0010\u0006\u001a\u00020\u00052\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0007HÆ\u0001¢\u0006\u0004\b\u001c\u0010\u001dJ\u0010\u0010\u001e\u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b\u001e\u0010\u001fJ\u0010\u0010 \u001a\u00020\u0015HÖ\u0001¢\u0006\u0004\b \u0010\u001bJ\u001a\u0010$\u001a\u00020#2\b\u0010\"\u001a\u0004\u0018\u00010!HÖ\u0003¢\u0006\u0004\b$\u0010%R\u001a\u0010\u0006\u001a\u00020\u00058\u0016X\u0096\u0004¢\u0006\f\n\u0004\b&\u0010'\u001a\u0004\b(\u0010\u001fR\u001c\u0010\b\u001a\u0004\u0018\u00010\u00078\u0016X\u0096\u0004¢\u0006\f\n\u0004\b)\u0010*\u001a\u0004\b+\u0010,R\u001c\u0010\t\u001a\u0004\u0018\u00010\u00078\u0016X\u0096\u0004¢\u0006\f\n\u0004\b-\u0010*\u001a\u0004\b.\u0010,R*\u00107\u001a\u0004\u0018\u00010\u000f8\u0006@\u0006X\u0086\u000e¢\u0006\u0018\n\u0004\b/\u00100\u0012\u0004\b5\u00106\u001a\u0004\b1\u00102\"\u0004\b3\u00104R&\u0010>\u001a\b\u0012\u0004\u0012\u000209088\u0016X\u0096\u0004¢\u0006\u0012\n\u0004\b:\u0010;\u0012\u0004\b=\u00106\u001a\u0004\b&\u0010<R(\u0010G\u001a\u00020?8\u0016@\u0016X\u0097\u000e¢\u0006\u0018\n\u0004\b@\u0010A\u0012\u0004\bF\u00106\u001a\u0004\bB\u0010C\"\u0004\bD\u0010E¨\u0006H"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/ESignatureComponent;", "Lfq/k5;", "Lfq/d;", "Lfq/v;", "Lfq/e0;", "", StackTraceHelper.NAME_KEY, "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", ViewProps.HIDDEN, "disabled", "<init>", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;)V", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ESignature;", "config", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ESignature;)V", "Landroid/graphics/Bitmap;", "newValue", "h", "(Landroid/graphics/Bitmap;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/ESignatureComponent;", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "c", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/ESignatureComponent;", "toString", "()Ljava/lang/String;", "hashCode", "", "other", "", "equals", "(Ljava/lang/Object;)Z", "d", "Ljava/lang/String;", "getName", "e", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "i", "getDisabled", "o", "Landroid/graphics/Bitmap;", "getValue", "()Landroid/graphics/Bitmap;", "setValue", "(Landroid/graphics/Bitmap;)V", "getValue$annotations", "()V", "value", "", "Lnq/a;", "p", "Ljava/util/List;", "()Ljava/util/List;", "getAssociatedViews$annotations", "associatedViews", "Lgq/a;", "q", "Lgq/a;", "a", "()Lgq/a;", "f", "(Lgq/a;)V", "getBitmapController$annotations", "bitmapController", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ESignatureComponent implements k5, fq.d, v, e0 {
    @NotNull
    public static final Parcelable.Creator<ESignatureComponent> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f19573d;

    /* renamed from: e  reason: collision with root package name */
    private final JsonLogicBoolean f19574e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f19575i;

    /* renamed from: o  reason: collision with root package name */
    private Bitmap f19576o;

    /* renamed from: p  reason: collision with root package name */
    private final List f19577p;

    /* renamed from: q  reason: collision with root package name */
    private gq.a f19578q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final ESignatureComponent createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new ESignatureComponent(parcel.readString(), (JsonLogicBoolean) parcel.readParcelable(ESignatureComponent.class.getClassLoader()), (JsonLogicBoolean) parcel.readParcelable(ESignatureComponent.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final ESignatureComponent[] newArray(int i10) {
            return new ESignatureComponent[i10];
        }
    }

    public ESignatureComponent(String name, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f19573d = name;
        this.f19574e = jsonLogicBoolean;
        this.f19575i = jsonLogicBoolean2;
        this.f19577p = new ArrayList();
        this.f19578q = new gq.a(null);
    }

    public static /* synthetic */ ESignatureComponent e(ESignatureComponent eSignatureComponent, String str, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = eSignatureComponent.f19573d;
        }
        if ((i10 & 2) != 0) {
            jsonLogicBoolean = eSignatureComponent.f19574e;
        }
        if ((i10 & 4) != 0) {
            jsonLogicBoolean2 = eSignatureComponent.f19575i;
        }
        return eSignatureComponent.c(str, jsonLogicBoolean, jsonLogicBoolean2);
    }

    @g(ignore = true)
    public static /* synthetic */ void getBitmapController$annotations() {
    }

    @Override // fq.d
    public gq.a a() {
        return this.f19578q;
    }

    public final ESignatureComponent c(String name, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2) {
        Intrinsics.checkNotNullParameter(name, "name");
        return new ESignatureComponent(name, jsonLogicBoolean, jsonLogicBoolean2);
    }

    @Override // fq.e0
    public List d() {
        return this.f19577p;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ESignatureComponent) {
            ESignatureComponent eSignatureComponent = (ESignatureComponent) obj;
            return Intrinsics.areEqual(this.f19573d, eSignatureComponent.f19573d) && Intrinsics.areEqual(this.f19574e, eSignatureComponent.f19574e) && Intrinsics.areEqual(this.f19575i, eSignatureComponent.f19575i);
        }
        return false;
    }

    public void f(gq.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<set-?>");
        this.f19578q = aVar;
    }

    @Override // fq.v
    public JsonLogicBoolean getDisabled() {
        return this.f19575i;
    }

    @Override // fq.e0
    public JsonLogicBoolean getHidden() {
        return this.f19574e;
    }

    @Override // fq.k5
    public String getName() {
        return this.f19573d;
    }

    @Override // fq.d
    /* renamed from: h */
    public ESignatureComponent b(Bitmap bitmap) {
        ESignatureComponent e10 = e(this, null, null, null, 7, null);
        e10.f19576o = bitmap;
        e10.f(a());
        return e10;
    }

    public int hashCode() {
        int hashCode = this.f19573d.hashCode() * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f19574e;
        int hashCode2 = (hashCode + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19575i;
        return hashCode2 + (jsonLogicBoolean2 != null ? jsonLogicBoolean2.hashCode() : 0);
    }

    public String toString() {
        String str = this.f19573d;
        JsonLogicBoolean jsonLogicBoolean = this.f19574e;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19575i;
        return "ESignatureComponent(name=" + str + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f19573d);
        dest.writeParcelable(this.f19574e, i10);
        dest.writeParcelable(this.f19575i, i10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public ESignatureComponent(com.withpersona.sdk2.inquiry.network.dto.ui.components.ESignature r4) {
        /*
            r3 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            java.lang.String r0 = r4.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.ESignature$Attributes r1 = r4.getAttributes()
            r2 = 0
            if (r1 == 0) goto L15
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r1 = r1.getHidden()
            goto L16
        L15:
            r1 = r2
        L16:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.ESignature$Attributes r4 = r4.getAttributes()
            if (r4 == 0) goto L20
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r2 = r4.getDisabled()
        L20:
            r3.<init>(r0, r1, r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.steps.ui.components.ESignatureComponent.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.ESignature):void");
    }
}
