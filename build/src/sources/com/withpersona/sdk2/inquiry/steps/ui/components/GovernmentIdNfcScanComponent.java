package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import vm.t;
import vm.w;
import xp.e0;
import xp.j2;
import xp.k5;
import xp.v;
import yp.g;
import yp.h;
@Metadata(d1 = {"\u0000x\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0018\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\b\t\b\u0087\b\u0018\u00002\u00020\u00012\u00020\u00022\u00020\u00032\u00020\u0004B[\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\u0006\u0010\t\u001a\u00020\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\f\u001a\u00020\u0005\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\r\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\r\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0010¢\u0006\u0004\b\u0012\u0010\u0013B\u0011\b\u0016\u0012\u0006\u0010\b\u001a\u00020\u0007¢\u0006\u0004\b\u0012\u0010\u0014J\u0015\u0010\u0016\u001a\u00020\u00002\u0006\u0010\u0015\u001a\u00020\u0005¢\u0006\u0004\b\u0016\u0010\u0017J\u0015\u0010\u0018\u001a\u00020\u00002\u0006\u0010\u0015\u001a\u00020\u0005¢\u0006\u0004\b\u0018\u0010\u0017J\u0017\u0010\u001a\u001a\u00020\u00002\b\u0010\u0019\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u001a\u0010\u0017J\u0017\u0010\u001b\u001a\u00020\u00002\b\u0010\u0019\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u001b\u0010\u0017J\u0017\u0010\u001c\u001a\u00020\u00002\b\u0010\u0015\u001a\u0004\u0018\u00010\u0010¢\u0006\u0004\b\u001c\u0010\u001dJ\u001d\u0010#\u001a\u00020\"2\u0006\u0010\u001f\u001a\u00020\u001e2\u0006\u0010!\u001a\u00020 ¢\u0006\u0004\b#\u0010$J\r\u0010%\u001a\u00020 ¢\u0006\u0004\b%\u0010&Jt\u0010'\u001a\u00020\u00002\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\b\u001a\u00020\u00072\b\b\u0002\u0010\t\u001a\u00020\u00052\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u00052\b\b\u0002\u0010\f\u001a\u00020\u00052\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\r2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\r2\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0010HÆ\u0001¢\u0006\u0004\b'\u0010(J\u0010\u0010)\u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b)\u0010*J\u0010\u0010+\u001a\u00020 HÖ\u0001¢\u0006\u0004\b+\u0010&J\u001a\u0010/\u001a\u00020.2\b\u0010-\u001a\u0004\u0018\u00010,HÖ\u0003¢\u0006\u0004\b/\u00100R\u001a\u0010\u0006\u001a\u00020\u00058\u0016X\u0096\u0004¢\u0006\f\n\u0004\b1\u00102\u001a\u0004\b3\u0010*R\u0017\u0010\b\u001a\u00020\u00078\u0006¢\u0006\f\n\u0004\b4\u00105\u001a\u0004\b4\u00106R\u0017\u0010\t\u001a\u00020\u00058\u0006¢\u0006\f\n\u0004\b7\u00102\u001a\u0004\b8\u0010*R\u0019\u0010\n\u001a\u0004\u0018\u00010\u00058\u0006¢\u0006\f\n\u0004\b\u001b\u00102\u001a\u0004\b9\u0010*R\u0019\u0010\u000b\u001a\u0004\u0018\u00010\u00058\u0006¢\u0006\f\n\u0004\b\u001c\u00102\u001a\u0004\b:\u0010*R\u0017\u0010\f\u001a\u00020\u00058\u0006¢\u0006\f\n\u0004\b;\u00102\u001a\u0004\b<\u0010*R\u001c\u0010\u000e\u001a\u0004\u0018\u00010\r8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b=\u0010>\u001a\u0004\b?\u0010@R\u001c\u0010\u000f\u001a\u0004\u0018\u00010\r8\u0016X\u0096\u0004¢\u0006\f\n\u0004\bA\u0010>\u001a\u0004\bB\u0010@R\u0019\u0010\u0011\u001a\u0004\u0018\u00010\u00108\u0006¢\u0006\f\n\u0004\bC\u0010D\u001a\u0004\bE\u0010FR&\u0010N\u001a\b\u0012\u0004\u0012\u00020H0G8\u0016X\u0096\u0004¢\u0006\u0012\n\u0004\bI\u0010J\u0012\u0004\bL\u0010M\u001a\u0004\b1\u0010KR(\u0010V\u001a\u00020.8\u0016@\u0016X\u0096\u000e¢\u0006\u0018\n\u0004\bO\u0010P\u0012\u0004\bU\u0010M\u001a\u0004\bQ\u0010R\"\u0004\bS\u0010TR(\u0010_\u001a\u00020W8\u0006@\u0006X\u0087\u000e¢\u0006\u0018\n\u0004\bX\u0010Y\u0012\u0004\b^\u0010M\u001a\u0004\bZ\u0010[\"\u0004\b\\\u0010]R(\u0010c\u001a\u00020W8\u0006@\u0006X\u0087\u000e¢\u0006\u0018\n\u0004\bS\u0010Y\u0012\u0004\bb\u0010M\u001a\u0004\b`\u0010[\"\u0004\ba\u0010]R(\u0010l\u001a\u00020d8\u0006@\u0006X\u0087\u000e¢\u0006\u0018\n\u0004\be\u0010f\u0012\u0004\bk\u0010M\u001a\u0004\bg\u0010h\"\u0004\bi\u0010jR(\u0010p\u001a\u00020d8\u0006@\u0006X\u0087\u000e¢\u0006\u0018\n\u0004\bm\u0010f\u0012\u0004\bo\u0010M\u001a\u0004\b7\u0010h\"\u0004\bn\u0010jR(\u0010y\u001a\u00020q8\u0006@\u0006X\u0087\u000e¢\u0006\u0018\n\u0004\br\u0010s\u0012\u0004\bx\u0010M\u001a\u0004\bt\u0010u\"\u0004\bv\u0010w¨\u0006z"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/GovernmentIdNfcScanComponent;", "Lxp/k5;", "Lxp/v;", "Lxp/e0;", "Lxp/j2;", "", StackTraceHelper.NAME_KEY, "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan;", "config", "documentNumber", "dateOfBirth", "expirationDate", "cardAccessNumber", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", ViewProps.HIDDEN, "disabled", "Lyp/g;", "governmentIdNfcData", "<init>", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lyp/g;)V", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan;)V", "newValue", "k", "(Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/GovernmentIdNfcScanComponent;", "n", "newDate", "m", "o", "p", "(Lyp/g;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/GovernmentIdNfcScanComponent;", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "a", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lyp/g;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/GovernmentIdNfcScanComponent;", "toString", "()Ljava/lang/String;", "hashCode", "", "other", "", "equals", "(Ljava/lang/Object;)Z", "d", "Ljava/lang/String;", "getName", "e", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan;", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/GovernmentIdNfcScan;", "i", "getDocumentNumber", "getDateOfBirth", "getExpirationDate", "q", "getCardAccessNumber", "r", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "s", "getDisabled", "t", "Lyp/g;", "getGovernmentIdNfcData", "()Lyp/g;", "", "Lfq/a;", "u", "Ljava/util/List;", "()Ljava/util/List;", "getAssociatedViews$annotations", "()V", "associatedViews", "v", "Z", "E0", "()Z", "x", "(Z)V", "getWasTapped$annotations", "wasTapped", "Lvm/t;", "w", "Lvm/t;", "c", "()Lvm/t;", "setCardAccessNumberController", "(Lvm/t;)V", "getCardAccessNumberController$annotations", "cardAccessNumberController", "g", "setDocumentNumberController", "getDocumentNumberController$annotations", "documentNumberController", "Lyp/e;", "y", "Lyp/e;", "f", "()Lyp/e;", "setDateOfBirthController", "(Lyp/e;)V", "getDateOfBirthController$annotations", "dateOfBirthController", "z", "setExpirationDateController", "getExpirationDateController$annotations", "expirationDateController", "Lyp/h;", "A", "Lyp/h;", "j", "()Lyp/h;", "setNfcDataController", "(Lyp/h;)V", "getNfcDataController$annotations", "nfcDataController", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class GovernmentIdNfcScanComponent implements k5, v, e0, j2 {
    @NotNull
    public static final Parcelable.Creator<GovernmentIdNfcScanComponent> CREATOR = new a();
    private h A;

    /* renamed from: d  reason: collision with root package name */
    private final String f20578d;

    /* renamed from: e  reason: collision with root package name */
    private final GovernmentIdNfcScan f20579e;

    /* renamed from: i  reason: collision with root package name */
    private final String f20580i;

    /* renamed from: o  reason: collision with root package name */
    private final String f20581o;

    /* renamed from: p  reason: collision with root package name */
    private final String f20582p;

    /* renamed from: q  reason: collision with root package name */
    private final String f20583q;

    /* renamed from: r  reason: collision with root package name */
    private final JsonLogicBoolean f20584r;

    /* renamed from: s  reason: collision with root package name */
    private final JsonLogicBoolean f20585s;

    /* renamed from: t  reason: collision with root package name */
    private final g f20586t;

    /* renamed from: u  reason: collision with root package name */
    private final List f20587u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f20588v;

    /* renamed from: w  reason: collision with root package name */
    private t f20589w;

    /* renamed from: x  reason: collision with root package name */
    private t f20590x;

    /* renamed from: y  reason: collision with root package name */
    private yp.e f20591y;

    /* renamed from: z  reason: collision with root package name */
    private yp.e f20592z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final GovernmentIdNfcScanComponent createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new GovernmentIdNfcScanComponent(parcel.readString(), (GovernmentIdNfcScan) parcel.readParcelable(GovernmentIdNfcScanComponent.class.getClassLoader()), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString(), (JsonLogicBoolean) parcel.readParcelable(GovernmentIdNfcScanComponent.class.getClassLoader()), (JsonLogicBoolean) parcel.readParcelable(GovernmentIdNfcScanComponent.class.getClassLoader()), parcel.readInt() == 0 ? null : g.CREATOR.createFromParcel(parcel));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final GovernmentIdNfcScanComponent[] newArray(int i10) {
            return new GovernmentIdNfcScanComponent[i10];
        }
    }

    public GovernmentIdNfcScanComponent(String name, GovernmentIdNfcScan config, String documentNumber, String str, String str2, String cardAccessNumber, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, g gVar) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(config, "config");
        Intrinsics.checkNotNullParameter(documentNumber, "documentNumber");
        Intrinsics.checkNotNullParameter(cardAccessNumber, "cardAccessNumber");
        this.f20578d = name;
        this.f20579e = config;
        this.f20580i = documentNumber;
        this.f20581o = str;
        this.f20582p = str2;
        this.f20583q = cardAccessNumber;
        this.f20584r = jsonLogicBoolean;
        this.f20585s = jsonLogicBoolean2;
        this.f20586t = gVar;
        this.f20587u = new ArrayList();
        this.f20589w = w.a(cardAccessNumber);
        this.f20590x = w.a(documentNumber);
        GovernmentIdNfcScan.Companion companion = GovernmentIdNfcScan.Companion;
        this.f20591y = new yp.e(str, null, companion.generateTextMonths());
        this.f20592z = new yp.e(str2, null, companion.generateTextMonths());
        this.A = new h(gVar);
    }

    public static /* synthetic */ GovernmentIdNfcScanComponent b(GovernmentIdNfcScanComponent governmentIdNfcScanComponent, String str, GovernmentIdNfcScan governmentIdNfcScan, String str2, String str3, String str4, String str5, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, g gVar, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = governmentIdNfcScanComponent.f20578d;
        }
        if ((i10 & 2) != 0) {
            governmentIdNfcScan = governmentIdNfcScanComponent.f20579e;
        }
        if ((i10 & 4) != 0) {
            str2 = governmentIdNfcScanComponent.f20580i;
        }
        if ((i10 & 8) != 0) {
            str3 = governmentIdNfcScanComponent.f20581o;
        }
        if ((i10 & 16) != 0) {
            str4 = governmentIdNfcScanComponent.f20582p;
        }
        if ((i10 & 32) != 0) {
            str5 = governmentIdNfcScanComponent.f20583q;
        }
        if ((i10 & 64) != 0) {
            jsonLogicBoolean = governmentIdNfcScanComponent.f20584r;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            jsonLogicBoolean2 = governmentIdNfcScanComponent.f20585s;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            gVar = governmentIdNfcScanComponent.f20586t;
        }
        JsonLogicBoolean jsonLogicBoolean3 = jsonLogicBoolean2;
        g gVar2 = gVar;
        String str6 = str5;
        JsonLogicBoolean jsonLogicBoolean4 = jsonLogicBoolean;
        String str7 = str4;
        String str8 = str2;
        return governmentIdNfcScanComponent.a(str, governmentIdNfcScan, str8, str3, str7, str6, jsonLogicBoolean4, jsonLogicBoolean3, gVar2);
    }

    @com.squareup.moshi.g(ignore = true)
    public static /* synthetic */ void getCardAccessNumberController$annotations() {
    }

    @com.squareup.moshi.g(ignore = true)
    public static /* synthetic */ void getDateOfBirthController$annotations() {
    }

    @com.squareup.moshi.g(ignore = true)
    public static /* synthetic */ void getDocumentNumberController$annotations() {
    }

    @com.squareup.moshi.g(ignore = true)
    public static /* synthetic */ void getExpirationDateController$annotations() {
    }

    @com.squareup.moshi.g(ignore = true)
    public static /* synthetic */ void getNfcDataController$annotations() {
    }

    public boolean E0() {
        return this.f20588v;
    }

    public final GovernmentIdNfcScanComponent a(String name, GovernmentIdNfcScan config, String documentNumber, String str, String str2, String cardAccessNumber, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, g gVar) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(config, "config");
        Intrinsics.checkNotNullParameter(documentNumber, "documentNumber");
        Intrinsics.checkNotNullParameter(cardAccessNumber, "cardAccessNumber");
        return new GovernmentIdNfcScanComponent(name, config, documentNumber, str, str2, cardAccessNumber, jsonLogicBoolean, jsonLogicBoolean2, gVar);
    }

    public final t c() {
        return this.f20589w;
    }

    @Override // xp.e0
    public List d() {
        return this.f20587u;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final GovernmentIdNfcScan e() {
        return this.f20579e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof GovernmentIdNfcScanComponent) {
            GovernmentIdNfcScanComponent governmentIdNfcScanComponent = (GovernmentIdNfcScanComponent) obj;
            return Intrinsics.areEqual(this.f20578d, governmentIdNfcScanComponent.f20578d) && Intrinsics.areEqual(this.f20579e, governmentIdNfcScanComponent.f20579e) && Intrinsics.areEqual(this.f20580i, governmentIdNfcScanComponent.f20580i) && Intrinsics.areEqual(this.f20581o, governmentIdNfcScanComponent.f20581o) && Intrinsics.areEqual(this.f20582p, governmentIdNfcScanComponent.f20582p) && Intrinsics.areEqual(this.f20583q, governmentIdNfcScanComponent.f20583q) && Intrinsics.areEqual(this.f20584r, governmentIdNfcScanComponent.f20584r) && Intrinsics.areEqual(this.f20585s, governmentIdNfcScanComponent.f20585s) && Intrinsics.areEqual(this.f20586t, governmentIdNfcScanComponent.f20586t);
        }
        return false;
    }

    public final yp.e f() {
        return this.f20591y;
    }

    public final t g() {
        return this.f20590x;
    }

    @Override // xp.v
    public JsonLogicBoolean getDisabled() {
        return this.f20585s;
    }

    @Override // xp.e0
    public JsonLogicBoolean getHidden() {
        return this.f20584r;
    }

    @Override // xp.k5
    public String getName() {
        return this.f20578d;
    }

    public int hashCode() {
        int hashCode = ((((this.f20578d.hashCode() * 31) + this.f20579e.hashCode()) * 31) + this.f20580i.hashCode()) * 31;
        String str = this.f20581o;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.f20582p;
        int hashCode3 = (((hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31) + this.f20583q.hashCode()) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f20584r;
        int hashCode4 = (hashCode3 + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20585s;
        int hashCode5 = (hashCode4 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31;
        g gVar = this.f20586t;
        return hashCode5 + (gVar != null ? gVar.hashCode() : 0);
    }

    public final yp.e i() {
        return this.f20592z;
    }

    public final h j() {
        return this.A;
    }

    public final GovernmentIdNfcScanComponent k(String newValue) {
        Intrinsics.checkNotNullParameter(newValue, "newValue");
        GovernmentIdNfcScanComponent b10 = b(this, null, null, null, null, null, newValue, null, null, null, 479, null);
        b10.f20589w = this.f20589w;
        b10.f20590x = this.f20590x;
        b10.f20591y = this.f20591y;
        b10.f20592z = this.f20592z;
        b10.A = this.A;
        return b10;
    }

    public final GovernmentIdNfcScanComponent m(String str) {
        GovernmentIdNfcScanComponent b10 = b(this, null, null, null, str, null, null, null, null, null, 503, null);
        b10.f20589w = this.f20589w;
        b10.f20590x = this.f20590x;
        b10.f20591y = this.f20591y;
        b10.f20592z = this.f20592z;
        b10.A = this.A;
        return b10;
    }

    public final GovernmentIdNfcScanComponent n(String newValue) {
        Intrinsics.checkNotNullParameter(newValue, "newValue");
        GovernmentIdNfcScanComponent b10 = b(this, null, null, newValue, null, null, null, null, null, null, 507, null);
        b10.f20589w = this.f20589w;
        b10.f20590x = this.f20590x;
        b10.f20591y = this.f20591y;
        b10.f20592z = this.f20592z;
        b10.A = this.A;
        return b10;
    }

    public final GovernmentIdNfcScanComponent o(String str) {
        GovernmentIdNfcScanComponent b10 = b(this, null, null, null, null, str, null, null, null, null, 495, null);
        b10.f20589w = this.f20589w;
        b10.f20590x = this.f20590x;
        b10.f20591y = this.f20591y;
        b10.f20592z = this.f20592z;
        b10.A = this.A;
        return b10;
    }

    public final GovernmentIdNfcScanComponent p(g gVar) {
        GovernmentIdNfcScanComponent b10 = b(this, null, null, null, null, null, null, null, null, gVar, SetSpanOperation.SPAN_MAX_PRIORITY, null);
        b10.f20589w = this.f20589w;
        b10.f20590x = this.f20590x;
        b10.f20591y = this.f20591y;
        b10.f20592z = this.f20592z;
        b10.A = this.A;
        return b10;
    }

    public String toString() {
        String str = this.f20578d;
        GovernmentIdNfcScan governmentIdNfcScan = this.f20579e;
        String str2 = this.f20580i;
        String str3 = this.f20581o;
        String str4 = this.f20582p;
        String str5 = this.f20583q;
        JsonLogicBoolean jsonLogicBoolean = this.f20584r;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20585s;
        g gVar = this.f20586t;
        return "GovernmentIdNfcScanComponent(name=" + str + ", config=" + governmentIdNfcScan + ", documentNumber=" + str2 + ", dateOfBirth=" + str3 + ", expirationDate=" + str4 + ", cardAccessNumber=" + str5 + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", governmentIdNfcData=" + gVar + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f20578d);
        dest.writeParcelable(this.f20579e, i10);
        dest.writeString(this.f20580i);
        dest.writeString(this.f20581o);
        dest.writeString(this.f20582p);
        dest.writeString(this.f20583q);
        dest.writeParcelable(this.f20584r, i10);
        dest.writeParcelable(this.f20585s, i10);
        g gVar = this.f20586t;
        if (gVar == null) {
            dest.writeInt(0);
            return;
        }
        dest.writeInt(1);
        gVar.writeToParcel(dest, i10);
    }

    @Override // xp.j2
    public void x(boolean z10) {
        this.f20588v = z10;
    }

    public /* synthetic */ GovernmentIdNfcScanComponent(String str, GovernmentIdNfcScan governmentIdNfcScan, String str2, String str3, String str4, String str5, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, g gVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, governmentIdNfcScan, str2, str3, str4, str5, jsonLogicBoolean, jsonLogicBoolean2, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : gVar);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public GovernmentIdNfcScanComponent(com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan r14) {
        /*
            r13 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r14, r0)
            java.lang.String r2 = r14.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan$Attributes r0 = r14.getAttributes()
            java.lang.String r1 = ""
            if (r0 == 0) goto L1a
            java.lang.String r0 = r0.getPrefillDocumentNumber()
            if (r0 != 0) goto L18
            goto L1a
        L18:
            r4 = r0
            goto L1b
        L1a:
            r4 = r1
        L1b:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan$Attributes r0 = r14.getAttributes()
            r3 = 0
            if (r0 == 0) goto L28
            java.lang.String r0 = r0.getPrefillDateOfBirth()
            r5 = r0
            goto L29
        L28:
            r5 = r3
        L29:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan$Attributes r0 = r14.getAttributes()
            if (r0 == 0) goto L35
            java.lang.String r0 = r0.getPrefillExpirationDate()
            r6 = r0
            goto L36
        L35:
            r6 = r3
        L36:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan$Attributes r0 = r14.getAttributes()
            if (r0 == 0) goto L45
            java.lang.String r0 = r0.getPrefillCardAccessNumber()
            if (r0 != 0) goto L43
            goto L45
        L43:
            r7 = r0
            goto L46
        L45:
            r7 = r1
        L46:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan$Attributes r0 = r14.getAttributes()
            if (r0 == 0) goto L52
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r0 = r0.getHidden()
            r8 = r0
            goto L53
        L52:
            r8 = r3
        L53:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan$Attributes r0 = r14.getAttributes()
            if (r0 == 0) goto L5d
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r3 = r0.getDisabled()
        L5d:
            r9 = r3
            r11 = 256(0x100, float:3.59E-43)
            r12 = 0
            r10 = 0
            r1 = r13
            r3 = r14
            r1.<init>(r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.steps.ui.components.GovernmentIdNfcScanComponent.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan):void");
    }
}
