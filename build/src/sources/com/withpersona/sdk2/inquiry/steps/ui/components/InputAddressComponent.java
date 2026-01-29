package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.g;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.steps.ui.network.Suggestion;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import vm.t;
import vm.w;
import xp.e0;
import xp.k5;
import xp.n0;
import xp.v;
import yp.m;
@Metadata(d1 = {"\u0000x\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0012\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0002\b(\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0019\b\u0087\b\u0018\u00002\u00020\u00012\u00020\u00022\u00020\u00032\u00020\u0004B\u008d\u0001\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\u0006\u0010\b\u001a\u00020\u0005\u0012\u0006\u0010\t\u001a\u00020\u0005\u0012\u0006\u0010\n\u001a\u00020\u0005\u0012\u0006\u0010\u000b\u001a\u00020\u0005\u0012\b\u0010\r\u001a\u0004\u0018\u00010\f\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0005\u0012\u0010\b\u0002\u0010\u0012\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010\u0010\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0014\u0012\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u0014¢\u0006\u0004\b\u0017\u0010\u0018B\u0019\b\u0016\u0012\u0006\u0010\u001a\u001a\u00020\u0019\u0012\u0006\u0010\u0016\u001a\u00020\u0014¢\u0006\u0004\b\u0017\u0010\u001bJ\u0019\u0010\u001d\u001a\u00020\u00002\b\u0010\u001c\u001a\u0004\u0018\u00010\u0014H\u0016¢\u0006\u0004\b\u001d\u0010\u001eJ\u0019\u0010 \u001a\u00020\u00002\b\u0010\u001f\u001a\u0004\u0018\u00010\u0005H\u0016¢\u0006\u0004\b \u0010!J\u0019\u0010\"\u001a\u00020\u00002\b\u0010\u001f\u001a\u0004\u0018\u00010\u0005H\u0016¢\u0006\u0004\b\"\u0010!J\u0019\u0010#\u001a\u00020\u00002\b\u0010\u001f\u001a\u0004\u0018\u00010\u0005H\u0016¢\u0006\u0004\b#\u0010!J\u0019\u0010$\u001a\u00020\u00002\b\u0010\u001f\u001a\u0004\u0018\u00010\u0005H\u0016¢\u0006\u0004\b$\u0010!J\u0019\u0010%\u001a\u00020\u00002\b\u0010\u001f\u001a\u0004\u0018\u00010\u0005H\u0016¢\u0006\u0004\b%\u0010!J\u0019\u0010&\u001a\u00020\u00002\b\u0010\u000f\u001a\u0004\u0018\u00010\u0005H\u0016¢\u0006\u0004\b&\u0010!J\u001f\u0010'\u001a\u00020\u00002\u000e\u0010\u0012\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010\u0010H\u0016¢\u0006\u0004\b'\u0010(J\u0019\u0010*\u001a\u00020\u00002\b\u0010)\u001a\u0004\u0018\u00010\u0005H\u0016¢\u0006\u0004\b*\u0010!J\u0019\u0010+\u001a\u00020\u00002\b\u0010\u0015\u001a\u0004\u0018\u00010\u0014H\u0016¢\u0006\u0004\b+\u0010\u001eJ\u001d\u00101\u001a\u0002002\u0006\u0010-\u001a\u00020,2\u0006\u0010/\u001a\u00020.¢\u0006\u0004\b1\u00102J\r\u00103\u001a\u00020.¢\u0006\u0004\b3\u00104J¦\u0001\u00105\u001a\u00020\u00002\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\b\b\u0002\u0010\b\u001a\u00020\u00052\b\b\u0002\u0010\t\u001a\u00020\u00052\b\b\u0002\u0010\n\u001a\u00020\u00052\b\b\u0002\u0010\u000b\u001a\u00020\u00052\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u00052\u0010\b\u0002\u0010\u0012\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010\u00102\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u00142\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u0014HÆ\u0001¢\u0006\u0004\b5\u00106J\u0010\u00107\u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b7\u00108J\u0010\u00109\u001a\u00020.HÖ\u0001¢\u0006\u0004\b9\u00104J\u001a\u0010<\u001a\u00020\u00142\b\u0010;\u001a\u0004\u0018\u00010:HÖ\u0003¢\u0006\u0004\b<\u0010=R\u001a\u0010\u0006\u001a\u00020\u00058\u0016X\u0096\u0004¢\u0006\f\n\u0004\b>\u0010?\u001a\u0004\b@\u00108R\"\u0010\u0007\u001a\u00020\u00058\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b\"\u0010?\u001a\u0004\bA\u00108\"\u0004\bB\u0010CR\"\u0010\b\u001a\u00020\u00058\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\bD\u0010?\u001a\u0004\bE\u00108\"\u0004\bF\u0010CR\"\u0010\t\u001a\u00020\u00058\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b$\u0010?\u001a\u0004\bG\u00108\"\u0004\bH\u0010CR\"\u0010\n\u001a\u00020\u00058\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b5\u0010?\u001a\u0004\bI\u00108\"\u0004\bJ\u0010CR\"\u0010\u000b\u001a\u00020\u00058\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\bK\u0010?\u001a\u0004\bL\u00108\"\u0004\bM\u0010CR\u001c\u0010\r\u001a\u0004\u0018\u00010\f8\u0016X\u0096\u0004¢\u0006\f\n\u0004\bG\u0010N\u001a\u0004\bO\u0010PR\u001c\u0010\u000e\u001a\u0004\u0018\u00010\f8\u0016X\u0096\u0004¢\u0006\f\n\u0004\bL\u0010N\u001a\u0004\bQ\u0010PR$\u0010\u000f\u001a\u0004\u0018\u00010\u00058\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\bR\u0010?\u001a\u0004\bR\u00108\"\u0004\bS\u0010CR*\u0010\u0012\u001a\n\u0012\u0004\u0012\u00020\u0011\u0018\u00010\u00108\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\bT\u0010U\u001a\u0004\bT\u0010V\"\u0004\bW\u0010XR$\u0010\u0013\u001a\u0004\u0018\u00010\u00058\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\bY\u0010?\u001a\u0004\bY\u00108\"\u0004\bZ\u0010CR$\u0010\u0015\u001a\u0004\u0018\u00010\u00148\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\bA\u0010[\u001a\u0004\b\\\u0010]\"\u0004\b^\u0010_R$\u0010\u0016\u001a\u0004\u0018\u00010\u00148\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b`\u0010[\u001a\u0004\ba\u0010]\"\u0004\bb\u0010_R&\u0010g\u001a\b\u0012\u0004\u0012\u00020d0c8\u0016X\u0096\u0004¢\u0006\u0012\n\u0004\bE\u0010U\u0012\u0004\be\u0010f\u001a\u0004\b>\u0010VR(\u0010o\u001a\u00020h8\u0016@\u0016X\u0096\u000e¢\u0006\u0018\n\u0004\bI\u0010i\u0012\u0004\bn\u0010f\u001a\u0004\bj\u0010k\"\u0004\bl\u0010mR(\u0010w\u001a\u00020p8\u0016@\u0016X\u0097\u000e¢\u0006\u0018\n\u0004\b\\\u0010q\u0012\u0004\bv\u0010f\u001a\u0004\br\u0010s\"\u0004\bt\u0010uR(\u0010{\u001a\u00020p8\u0016@\u0016X\u0097\u000e¢\u0006\u0018\n\u0004\bx\u0010q\u0012\u0004\bz\u0010f\u001a\u0004\bD\u0010s\"\u0004\by\u0010uR(\u0010\u007f\u001a\u00020p8\u0016@\u0016X\u0097\u000e¢\u0006\u0018\n\u0004\ba\u0010q\u0012\u0004\b~\u0010f\u001a\u0004\b|\u0010s\"\u0004\b}\u0010uR,\u0010\u0083\u0001\u001a\u00020p8\u0016@\u0016X\u0097\u000e¢\u0006\u001b\n\u0004\bb\u0010q\u0012\u0005\b\u0082\u0001\u0010f\u001a\u0005\b\u0080\u0001\u0010s\"\u0005\b\u0081\u0001\u0010uR-\u0010\u0088\u0001\u001a\u00020p8\u0016@\u0016X\u0097\u000e¢\u0006\u001c\n\u0005\b\u0084\u0001\u0010q\u0012\u0005\b\u0087\u0001\u0010f\u001a\u0005\b\u0085\u0001\u0010s\"\u0005\b\u0086\u0001\u0010u¨\u0006\u0089\u0001"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputAddressComponent;", "Lxp/k5;", "Lxp/c;", "Lxp/v;", "Lxp/e0;", "", StackTraceHelper.NAME_KEY, "street1", "street2", "city", "subdivision", "postalCode", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", ViewProps.HIDDEN, "disabled", "searchQuery", "", "Lcom/withpersona/sdk2/inquiry/steps/ui/network/Suggestion;", "searchResults", "selectedSearchResultId", "", "isAddressAutocompleteLoading", "isAddressComponentsCollapsed", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Ljava/lang/String;Ljava/util/List;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;)V", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputAddress;", "config", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputAddress;Z)V", "newState", "j", "(Ljava/lang/Boolean;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputAddressComponent;", "newString", "m", "(Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputAddressComponent;", "e", "f", "o", "k", "P", "Q", "(Ljava/util/List;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputAddressComponent;", "resultId", "R", "O", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "p", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Ljava/lang/String;Ljava/util/List;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputAddressComponent;", "toString", "()Ljava/lang/String;", "hashCode", "", "other", "equals", "(Ljava/lang/Object;)Z", "d", "Ljava/lang/String;", "getName", "w", "setStreet1", "(Ljava/lang/String;)V", "i", "y", "setStreet2", "r", "setCity", "z", "setSubdivision", "q", "s", "setPostalCode", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getDisabled", "t", "setSearchQuery", "u", "Ljava/util/List;", "()Ljava/util/List;", "setSearchResults", "(Ljava/util/List;)V", "v", "setSelectedSearchResultId", "Ljava/lang/Boolean;", "A", "()Ljava/lang/Boolean;", "setAddressAutocompleteLoading", "(Ljava/lang/Boolean;)V", "x", "C", "D", "", "Lfq/a;", "getAssociatedViews$annotations", "()V", "associatedViews", "Lyp/m;", "Lyp/m;", "n", "()Lyp/m;", "G", "(Lyp/m;)V", "isAddressFieldCollapsed$annotations", "isAddressFieldCollapsed", "Lvm/t;", "Lvm/t;", "g", "()Lvm/t;", "J", "(Lvm/t;)V", "getTextControllerForAddressStreet1$annotations", "textControllerForAddressStreet1", "B", "K", "getTextControllerForAddressStreet2$annotations", "textControllerForAddressStreet2", "a", "H", "getTextControllerForAddressCity$annotations", "textControllerForAddressCity", "c", "M", "getTextControllerForAddressSubdivision$annotations", "textControllerForAddressSubdivision", "E", "b", "I", "getTextControllerForAddressPostalCode$annotations", "textControllerForAddressPostalCode", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputAddressComponent implements k5, xp.c, v, e0 {
    @NotNull
    public static final Parcelable.Creator<InputAddressComponent> CREATOR = new a();
    private t A;
    private t B;
    private t C;
    private t D;
    private t E;

    /* renamed from: d  reason: collision with root package name */
    private final String f20593d;

    /* renamed from: e  reason: collision with root package name */
    private String f20594e;

    /* renamed from: i  reason: collision with root package name */
    private String f20595i;

    /* renamed from: o  reason: collision with root package name */
    private String f20596o;

    /* renamed from: p  reason: collision with root package name */
    private String f20597p;

    /* renamed from: q  reason: collision with root package name */
    private String f20598q;

    /* renamed from: r  reason: collision with root package name */
    private final JsonLogicBoolean f20599r;

    /* renamed from: s  reason: collision with root package name */
    private final JsonLogicBoolean f20600s;

    /* renamed from: t  reason: collision with root package name */
    private String f20601t;

    /* renamed from: u  reason: collision with root package name */
    private List f20602u;

    /* renamed from: v  reason: collision with root package name */
    private String f20603v;

    /* renamed from: w  reason: collision with root package name */
    private Boolean f20604w;

    /* renamed from: x  reason: collision with root package name */
    private Boolean f20605x;

    /* renamed from: y  reason: collision with root package name */
    private final List f20606y;

    /* renamed from: z  reason: collision with root package name */
    private m f20607z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final InputAddressComponent createFromParcel(Parcel parcel) {
            ArrayList arrayList;
            Boolean valueOf;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            String readString2 = parcel.readString();
            String readString3 = parcel.readString();
            String readString4 = parcel.readString();
            String readString5 = parcel.readString();
            String readString6 = parcel.readString();
            JsonLogicBoolean jsonLogicBoolean = (JsonLogicBoolean) parcel.readParcelable(InputAddressComponent.class.getClassLoader());
            JsonLogicBoolean jsonLogicBoolean2 = (JsonLogicBoolean) parcel.readParcelable(InputAddressComponent.class.getClassLoader());
            String readString7 = parcel.readString();
            Boolean bool = null;
            if (parcel.readInt() == 0) {
                arrayList = null;
            } else {
                int readInt = parcel.readInt();
                arrayList = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList.add(Suggestion.CREATOR.createFromParcel(parcel));
                }
            }
            String readString8 = parcel.readString();
            if (parcel.readInt() == 0) {
                valueOf = null;
            } else {
                valueOf = Boolean.valueOf(parcel.readInt() != 0);
            }
            if (parcel.readInt() != 0) {
                bool = Boolean.valueOf(parcel.readInt() != 0);
            }
            return new InputAddressComponent(readString, readString2, readString3, readString4, readString5, readString6, jsonLogicBoolean, jsonLogicBoolean2, readString7, arrayList, readString8, valueOf, bool);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final InputAddressComponent[] newArray(int i10) {
            return new InputAddressComponent[i10];
        }
    }

    public InputAddressComponent(String name, String street1, String street2, String city, String subdivision, String postalCode, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str, List list, String str2, Boolean bool, Boolean bool2) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(street1, "street1");
        Intrinsics.checkNotNullParameter(street2, "street2");
        Intrinsics.checkNotNullParameter(city, "city");
        Intrinsics.checkNotNullParameter(subdivision, "subdivision");
        Intrinsics.checkNotNullParameter(postalCode, "postalCode");
        this.f20593d = name;
        this.f20594e = street1;
        this.f20595i = street2;
        this.f20596o = city;
        this.f20597p = subdivision;
        this.f20598q = postalCode;
        this.f20599r = jsonLogicBoolean;
        this.f20600s = jsonLogicBoolean2;
        this.f20601t = str;
        this.f20602u = list;
        this.f20603v = str2;
        this.f20604w = bool;
        this.f20605x = bool2;
        this.f20606y = new ArrayList();
        this.f20607z = new m(true);
        this.A = w.a(this.f20594e);
        this.B = w.a(this.f20595i);
        this.C = w.a(this.f20596o);
        this.D = w.a(this.f20597p);
        this.E = w.a(this.f20598q);
    }

    @g(ignore = true)
    public static /* synthetic */ void getTextControllerForAddressCity$annotations() {
    }

    @g(ignore = true)
    public static /* synthetic */ void getTextControllerForAddressPostalCode$annotations() {
    }

    @g(ignore = true)
    public static /* synthetic */ void getTextControllerForAddressStreet1$annotations() {
    }

    @g(ignore = true)
    public static /* synthetic */ void getTextControllerForAddressStreet2$annotations() {
    }

    @g(ignore = true)
    public static /* synthetic */ void getTextControllerForAddressSubdivision$annotations() {
    }

    public static /* synthetic */ InputAddressComponent q(InputAddressComponent inputAddressComponent, String str, String str2, String str3, String str4, String str5, String str6, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str7, List list, String str8, Boolean bool, Boolean bool2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = inputAddressComponent.f20593d;
        }
        return inputAddressComponent.p(str, (i10 & 2) != 0 ? inputAddressComponent.f20594e : str2, (i10 & 4) != 0 ? inputAddressComponent.f20595i : str3, (i10 & 8) != 0 ? inputAddressComponent.f20596o : str4, (i10 & 16) != 0 ? inputAddressComponent.f20597p : str5, (i10 & 32) != 0 ? inputAddressComponent.f20598q : str6, (i10 & 64) != 0 ? inputAddressComponent.f20599r : jsonLogicBoolean, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? inputAddressComponent.f20600s : jsonLogicBoolean2, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? inputAddressComponent.f20601t : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? inputAddressComponent.f20602u : list, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? inputAddressComponent.f20603v : str8, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? inputAddressComponent.f20604w : bool, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? inputAddressComponent.f20605x : bool2);
    }

    public final Boolean A() {
        return this.f20604w;
    }

    public final Boolean C() {
        return this.f20605x;
    }

    public final void D(Boolean bool) {
        this.f20605x = bool;
    }

    public void G(m mVar) {
        Intrinsics.checkNotNullParameter(mVar, "<set-?>");
        this.f20607z = mVar;
    }

    public void H(t tVar) {
        Intrinsics.checkNotNullParameter(tVar, "<set-?>");
        this.C = tVar;
    }

    public void I(t tVar) {
        Intrinsics.checkNotNullParameter(tVar, "<set-?>");
        this.E = tVar;
    }

    public void J(t tVar) {
        Intrinsics.checkNotNullParameter(tVar, "<set-?>");
        this.A = tVar;
    }

    public void K(t tVar) {
        Intrinsics.checkNotNullParameter(tVar, "<set-?>");
        this.B = tVar;
    }

    public void M(t tVar) {
        Intrinsics.checkNotNullParameter(tVar, "<set-?>");
        this.D = tVar;
    }

    public InputAddressComponent O(Boolean bool) {
        InputAddressComponent d10;
        d10 = n0.d(q(this, null, null, null, null, null, null, null, null, null, null, null, bool, null, 6143, null), this);
        return d10;
    }

    public InputAddressComponent P(String str) {
        InputAddressComponent d10;
        d10 = n0.d(q(this, null, null, null, null, null, null, null, null, str, null, null, null, null, 7935, null), this);
        return d10;
    }

    public InputAddressComponent Q(List list) {
        InputAddressComponent d10;
        d10 = n0.d(q(this, null, null, null, null, null, null, null, null, null, list, null, null, null, 7679, null), this);
        return d10;
    }

    public InputAddressComponent R(String str) {
        InputAddressComponent d10;
        d10 = n0.d(q(this, null, null, null, null, null, null, null, null, null, null, str, null, null, 7167, null), this);
        return d10;
    }

    @Override // xp.c
    public t a() {
        return this.C;
    }

    @Override // xp.c
    public t b() {
        return this.E;
    }

    @Override // xp.c
    public t c() {
        return this.D;
    }

    @Override // xp.e0
    public List d() {
        return this.f20606y;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // xp.c
    public InputAddressComponent e(String str) {
        String str2;
        InputAddressComponent d10;
        if (str == null) {
            str2 = "";
        } else {
            str2 = str;
        }
        d10 = n0.d(q(this, null, null, str2, null, null, null, null, null, null, null, null, null, null, 8187, null), this);
        return d10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof InputAddressComponent) {
            InputAddressComponent inputAddressComponent = (InputAddressComponent) obj;
            return Intrinsics.areEqual(this.f20593d, inputAddressComponent.f20593d) && Intrinsics.areEqual(this.f20594e, inputAddressComponent.f20594e) && Intrinsics.areEqual(this.f20595i, inputAddressComponent.f20595i) && Intrinsics.areEqual(this.f20596o, inputAddressComponent.f20596o) && Intrinsics.areEqual(this.f20597p, inputAddressComponent.f20597p) && Intrinsics.areEqual(this.f20598q, inputAddressComponent.f20598q) && Intrinsics.areEqual(this.f20599r, inputAddressComponent.f20599r) && Intrinsics.areEqual(this.f20600s, inputAddressComponent.f20600s) && Intrinsics.areEqual(this.f20601t, inputAddressComponent.f20601t) && Intrinsics.areEqual(this.f20602u, inputAddressComponent.f20602u) && Intrinsics.areEqual(this.f20603v, inputAddressComponent.f20603v) && Intrinsics.areEqual(this.f20604w, inputAddressComponent.f20604w) && Intrinsics.areEqual(this.f20605x, inputAddressComponent.f20605x);
        }
        return false;
    }

    @Override // xp.c
    public InputAddressComponent f(String str) {
        String str2;
        InputAddressComponent d10;
        if (str == null) {
            str2 = "";
        } else {
            str2 = str;
        }
        d10 = n0.d(q(this, null, null, null, str2, null, null, null, null, null, null, null, null, null, 8183, null), this);
        return d10;
    }

    @Override // xp.c
    public t g() {
        return this.A;
    }

    @Override // xp.v
    public JsonLogicBoolean getDisabled() {
        return this.f20600s;
    }

    @Override // xp.e0
    public JsonLogicBoolean getHidden() {
        return this.f20599r;
    }

    @Override // xp.k5
    public String getName() {
        return this.f20593d;
    }

    public int hashCode() {
        int hashCode = ((((((((((this.f20593d.hashCode() * 31) + this.f20594e.hashCode()) * 31) + this.f20595i.hashCode()) * 31) + this.f20596o.hashCode()) * 31) + this.f20597p.hashCode()) * 31) + this.f20598q.hashCode()) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f20599r;
        int hashCode2 = (hashCode + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20600s;
        int hashCode3 = (hashCode2 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31;
        String str = this.f20601t;
        int hashCode4 = (hashCode3 + (str == null ? 0 : str.hashCode())) * 31;
        List list = this.f20602u;
        int hashCode5 = (hashCode4 + (list == null ? 0 : list.hashCode())) * 31;
        String str2 = this.f20603v;
        int hashCode6 = (hashCode5 + (str2 == null ? 0 : str2.hashCode())) * 31;
        Boolean bool = this.f20604w;
        int hashCode7 = (hashCode6 + (bool == null ? 0 : bool.hashCode())) * 31;
        Boolean bool2 = this.f20605x;
        return hashCode7 + (bool2 != null ? bool2.hashCode() : 0);
    }

    @Override // xp.c
    public t i() {
        return this.B;
    }

    @Override // xp.c
    public InputAddressComponent j(Boolean bool) {
        InputAddressComponent d10;
        d10 = n0.d(q(this, null, null, null, null, null, null, null, null, null, null, null, null, bool, 4095, null), this);
        return d10;
    }

    @Override // xp.c
    public InputAddressComponent k(String str) {
        String str2;
        InputAddressComponent d10;
        if (str == null) {
            str2 = "";
        } else {
            str2 = str;
        }
        d10 = n0.d(q(this, null, null, null, null, null, str2, null, null, null, null, null, null, null, 8159, null), this);
        return d10;
    }

    @Override // xp.c
    public InputAddressComponent m(String str) {
        String str2;
        InputAddressComponent d10;
        if (str == null) {
            str2 = "";
        } else {
            str2 = str;
        }
        d10 = n0.d(q(this, null, str2, null, null, null, null, null, null, null, null, null, null, null, 8189, null), this);
        return d10;
    }

    @Override // xp.c
    public m n() {
        return this.f20607z;
    }

    @Override // xp.c
    public InputAddressComponent o(String str) {
        String str2;
        InputAddressComponent d10;
        if (str == null) {
            str2 = "";
        } else {
            str2 = str;
        }
        d10 = n0.d(q(this, null, null, null, null, str2, null, null, null, null, null, null, null, null, 8175, null), this);
        return d10;
    }

    public final InputAddressComponent p(String name, String street1, String street2, String city, String subdivision, String postalCode, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str, List list, String str2, Boolean bool, Boolean bool2) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(street1, "street1");
        Intrinsics.checkNotNullParameter(street2, "street2");
        Intrinsics.checkNotNullParameter(city, "city");
        Intrinsics.checkNotNullParameter(subdivision, "subdivision");
        Intrinsics.checkNotNullParameter(postalCode, "postalCode");
        return new InputAddressComponent(name, street1, street2, city, subdivision, postalCode, jsonLogicBoolean, jsonLogicBoolean2, str, list, str2, bool, bool2);
    }

    public final String r() {
        return this.f20596o;
    }

    public final String s() {
        return this.f20598q;
    }

    public final String t() {
        return this.f20601t;
    }

    public String toString() {
        String str = this.f20593d;
        String str2 = this.f20594e;
        String str3 = this.f20595i;
        String str4 = this.f20596o;
        String str5 = this.f20597p;
        String str6 = this.f20598q;
        JsonLogicBoolean jsonLogicBoolean = this.f20599r;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20600s;
        String str7 = this.f20601t;
        List list = this.f20602u;
        String str8 = this.f20603v;
        Boolean bool = this.f20604w;
        Boolean bool2 = this.f20605x;
        return "InputAddressComponent(name=" + str + ", street1=" + str2 + ", street2=" + str3 + ", city=" + str4 + ", subdivision=" + str5 + ", postalCode=" + str6 + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", searchQuery=" + str7 + ", searchResults=" + list + ", selectedSearchResultId=" + str8 + ", isAddressAutocompleteLoading=" + bool + ", isAddressComponentsCollapsed=" + bool2 + ")";
    }

    public final List u() {
        return this.f20602u;
    }

    public final String v() {
        return this.f20603v;
    }

    public final String w() {
        return this.f20594e;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f20593d);
        dest.writeString(this.f20594e);
        dest.writeString(this.f20595i);
        dest.writeString(this.f20596o);
        dest.writeString(this.f20597p);
        dest.writeString(this.f20598q);
        dest.writeParcelable(this.f20599r, i10);
        dest.writeParcelable(this.f20600s, i10);
        dest.writeString(this.f20601t);
        List<Suggestion> list = this.f20602u;
        if (list == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            dest.writeInt(list.size());
            for (Suggestion suggestion : list) {
                suggestion.writeToParcel(dest, i10);
            }
        }
        dest.writeString(this.f20603v);
        Boolean bool = this.f20604w;
        if (bool == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            dest.writeInt(bool.booleanValue() ? 1 : 0);
        }
        Boolean bool2 = this.f20605x;
        if (bool2 == null) {
            dest.writeInt(0);
            return;
        }
        dest.writeInt(1);
        dest.writeInt(bool2.booleanValue() ? 1 : 0);
    }

    public final String y() {
        return this.f20595i;
    }

    public final String z() {
        return this.f20597p;
    }

    public /* synthetic */ InputAddressComponent(String str, String str2, String str3, String str4, String str5, String str6, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, String str7, List list, String str8, Boolean bool, Boolean bool2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, str3, str4, str5, str6, jsonLogicBoolean, jsonLogicBoolean2, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : list, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str8, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : bool, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : bool2);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public InputAddressComponent(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress r18, boolean r19) {
        /*
            r17 = this;
            java.lang.String r0 = "config"
            r1 = r18
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r1, r0)
            java.lang.String r2 = r1.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress$Attributes r0 = r1.getAttributes()
            java.lang.String r3 = ""
            if (r0 == 0) goto L19
            java.lang.String r0 = r0.getPrefillAddressStreet1()
            if (r0 != 0) goto L1a
        L19:
            r0 = r3
        L1a:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress$Attributes r4 = r1.getAttributes()
            if (r4 == 0) goto L26
            java.lang.String r4 = r4.getPrefillAddressStreet2()
            if (r4 != 0) goto L27
        L26:
            r4 = r3
        L27:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress$Attributes r5 = r1.getAttributes()
            if (r5 == 0) goto L33
            java.lang.String r5 = r5.getPrefillAddressCity()
            if (r5 != 0) goto L34
        L33:
            r5 = r3
        L34:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress$Attributes r6 = r1.getAttributes()
            if (r6 == 0) goto L40
            java.lang.String r6 = r6.getPrefillAddressSubdivision()
            if (r6 != 0) goto L41
        L40:
            r6 = r3
        L41:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress$Attributes r7 = r1.getAttributes()
            if (r7 == 0) goto L4d
            java.lang.String r7 = r7.getPrefillAddressPostalCode()
            if (r7 != 0) goto L4e
        L4d:
            r7 = r3
        L4e:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress$Attributes r3 = r1.getAttributes()
            r8 = 0
            if (r3 == 0) goto L5a
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r3 = r3.getHidden()
            goto L5b
        L5a:
            r3 = r8
        L5b:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress$Attributes r1 = r1.getAttributes()
            if (r1 == 0) goto L65
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r8 = r1.getDisabled()
        L65:
            r9 = r8
            java.lang.Boolean r14 = java.lang.Boolean.valueOf(r19)
            r15 = 3840(0xf00, float:5.381E-42)
            r16 = 0
            r10 = 0
            r11 = 0
            r12 = 0
            r13 = 0
            r1 = r17
            r8 = r3
            r3 = r0
            r1.<init>(r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.steps.ui.components.InputAddressComponent.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress, boolean):void");
    }
}
