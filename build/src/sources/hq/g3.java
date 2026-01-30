package hq;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.steps.ui.components.GovernmentIdNfcScanComponent;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import xp.k5;
import xp.q5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g3 implements Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b extends Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements b {
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0361a();

            /* renamed from: d  reason: collision with root package name */
            private final com.withpersona.sdk2.inquiry.steps.ui.components.a f27804d;

            /* renamed from: hq.g3$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0361a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new a((com.withpersona.sdk2.inquiry.steps.ui.components.a) parcel.readParcelable(a.class.getClassLoader()));
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final a[] newArray(int i10) {
                    return new a[i10];
                }
            }

            public a(com.withpersona.sdk2.inquiry.steps.ui.components.a createPersonaSheetComponent) {
                Intrinsics.checkNotNullParameter(createPersonaSheetComponent, "createPersonaSheetComponent");
                this.f27804d = createPersonaSheetComponent;
            }

            public final com.withpersona.sdk2.inquiry.steps.ui.components.a a() {
                return this.f27804d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof a) && Intrinsics.areEqual(this.f27804d, ((a) obj).f27804d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f27804d.hashCode();
            }

            public String toString() {
                com.withpersona.sdk2.inquiry.steps.ui.components.a aVar = this.f27804d;
                return "CreateReusablePersona(createPersonaSheetComponent=" + aVar + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f27804d, i10);
            }
        }

        /* renamed from: hq.g3$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0362b implements b {
            @NotNull
            public static final Parcelable.Creator<C0362b> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final q5 f27805d;

            /* renamed from: e  reason: collision with root package name */
            private final Map f27806e;

            /* renamed from: hq.g3$b$b$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0362b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    q5 q5Var = (q5) parcel.readParcelable(C0362b.class.getClassLoader());
                    int readInt = parcel.readInt();
                    LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        linkedHashMap.put(parcel.readString(), parcel.readParcelable(C0362b.class.getClassLoader()));
                    }
                    return new C0362b(q5Var, linkedHashMap);
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0362b[] newArray(int i10) {
                    return new C0362b[i10];
                }
            }

            public C0362b(q5 verifyPersonaButtonComponent, Map componentParams) {
                Intrinsics.checkNotNullParameter(verifyPersonaButtonComponent, "verifyPersonaButtonComponent");
                Intrinsics.checkNotNullParameter(componentParams, "componentParams");
                this.f27805d = verifyPersonaButtonComponent;
                this.f27806e = componentParams;
            }

            public final Map a() {
                return this.f27806e;
            }

            public final q5 b() {
                return this.f27805d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof C0362b)) {
                    return false;
                }
                C0362b c0362b = (C0362b) obj;
                if (Intrinsics.areEqual(this.f27805d, c0362b.f27805d) && Intrinsics.areEqual(this.f27806e, c0362b.f27806e)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (this.f27805d.hashCode() * 31) + this.f27806e.hashCode();
            }

            public String toString() {
                q5 q5Var = this.f27805d;
                Map map = this.f27806e;
                return "VerifyReusablePersona(verifyPersonaButtonComponent=" + q5Var + ", componentParams=" + map + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f27805d, i10);
                Map map = this.f27806e;
                dest.writeInt(map.size());
                for (Map.Entry entry : map.entrySet()) {
                    dest.writeString((String) entry.getKey());
                    dest.writeParcelable((Parcelable) entry.getValue(), i10);
                }
            }
        }
    }

    public /* synthetic */ g3(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private g3() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends g3 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new b();

        /* renamed from: d  reason: collision with root package name */
        private final List f27787d;

        /* renamed from: e  reason: collision with root package name */
        private final String f27788e;

        /* renamed from: i  reason: collision with root package name */
        private final List f27789i;

        /* renamed from: o  reason: collision with root package name */
        private final StepStyles.UiStepStyle f27790o;

        /* renamed from: p  reason: collision with root package name */
        private final String f27791p;

        /* renamed from: q  reason: collision with root package name */
        private final c f27792q;

        /* renamed from: r  reason: collision with root package name */
        private final C0358a f27793r;

        /* renamed from: s  reason: collision with root package name */
        private final b f27794s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f27795t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f27796u;

        /* renamed from: v  reason: collision with root package name */
        private final Map f27797v;

        /* renamed from: w  reason: collision with root package name */
        private final k5 f27798w;

        /* renamed from: x  reason: collision with root package name */
        private final String f27799x;

        /* renamed from: hq.g3$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0358a implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<C0358a> CREATOR = new C0359a();

            /* renamed from: d  reason: collision with root package name */
            private final xp.h f27800d;

            /* renamed from: e  reason: collision with root package name */
            private final int f27801e;

            /* renamed from: i  reason: collision with root package name */
            private final String f27802i;

            /* renamed from: hq.g3$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0359a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0358a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new C0358a((xp.h) parcel.readParcelable(C0358a.class.getClassLoader()), parcel.readInt(), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0358a[] newArray(int i10) {
                    return new C0358a[i10];
                }
            }

            public C0358a(xp.h component, int i10, String str) {
                Intrinsics.checkNotNullParameter(component, "component");
                this.f27800d = component;
                this.f27801e = i10;
                this.f27802i = str;
            }

            public final xp.h a() {
                return this.f27800d;
            }

            public final int b() {
                return this.f27801e;
            }

            public final String c() {
                return this.f27802i;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof C0358a)) {
                    return false;
                }
                C0358a c0358a = (C0358a) obj;
                if (Intrinsics.areEqual(this.f27800d, c0358a.f27800d) && this.f27801e == c0358a.f27801e && Intrinsics.areEqual(this.f27802i, c0358a.f27802i)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((this.f27800d.hashCode() * 31) + Integer.hashCode(this.f27801e)) * 31;
                String str = this.f27802i;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return hashCode2 + hashCode;
            }

            public String toString() {
                xp.h hVar = this.f27800d;
                int i10 = this.f27801e;
                String str = this.f27802i;
                return "AutoSubmit(component=" + hVar + ", countdown=" + i10 + ", countdownText=" + str + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f27800d, i10);
                dest.writeInt(this.f27801e);
                dest.writeString(this.f27802i);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                c createFromParcel;
                C0358a createFromParcel2;
                LinkedHashMap linkedHashMap;
                C0358a c0358a;
                b bVar;
                boolean z10;
                LinkedHashMap linkedHashMap2;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                int i10 = 0;
                for (int i11 = 0; i11 != readInt; i11++) {
                    arrayList.add(parcel.readParcelable(a.class.getClassLoader()));
                }
                String readString = parcel.readString();
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i12 = 0; i12 != readInt2; i12++) {
                    arrayList2.add(parcel.readParcelable(a.class.getClassLoader()));
                }
                StepStyles.UiStepStyle uiStepStyle = (StepStyles.UiStepStyle) parcel.readParcelable(a.class.getClassLoader());
                String readString2 = parcel.readString();
                if (parcel.readInt() == 0) {
                    createFromParcel = null;
                } else {
                    createFromParcel = c.CREATOR.createFromParcel(parcel);
                }
                c cVar = createFromParcel;
                if (parcel.readInt() == 0) {
                    createFromParcel2 = null;
                } else {
                    createFromParcel2 = C0358a.CREATOR.createFromParcel(parcel);
                }
                C0358a c0358a2 = createFromParcel2;
                b bVar2 = (b) parcel.readParcelable(a.class.getClassLoader());
                boolean z11 = true;
                if (parcel.readInt() != 0) {
                    linkedHashMap = null;
                    c0358a = c0358a2;
                    bVar = bVar2;
                    z10 = true;
                } else {
                    linkedHashMap = null;
                    c0358a = c0358a2;
                    bVar = bVar2;
                    z10 = false;
                }
                if (parcel.readInt() == 0) {
                    z11 = false;
                }
                if (parcel.readInt() == 0) {
                    linkedHashMap2 = linkedHashMap;
                } else {
                    int readInt3 = parcel.readInt();
                    linkedHashMap2 = new LinkedHashMap(readInt3);
                    while (i10 != readInt3) {
                        linkedHashMap2.put(parcel.readString(), parcel.readParcelable(a.class.getClassLoader()));
                        i10++;
                        uiStepStyle = uiStepStyle;
                    }
                }
                return new a(arrayList, readString, arrayList2, uiStepStyle, readString2, cVar, c0358a, bVar, z10, z11, linkedHashMap2, (k5) parcel.readParcelable(a.class.getClassLoader()), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new C0360a();

            /* renamed from: d  reason: collision with root package name */
            private final GovernmentIdNfcScanComponent f27803d;

            /* renamed from: hq.g3$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0360a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new c((GovernmentIdNfcScanComponent) parcel.readParcelable(c.class.getClassLoader()));
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public c(GovernmentIdNfcScanComponent component) {
                Intrinsics.checkNotNullParameter(component, "component");
                this.f27803d = component;
            }

            public final GovernmentIdNfcScanComponent a() {
                return this.f27803d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof c) && Intrinsics.areEqual(this.f27803d, ((c) obj).f27803d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f27803d.hashCode();
            }

            public String toString() {
                GovernmentIdNfcScanComponent governmentIdNfcScanComponent = this.f27803d;
                return "NfcScan(component=" + governmentIdNfcScanComponent + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f27803d, i10);
            }
        }

        public /* synthetic */ a(List list, String str, List list2, StepStyles.UiStepStyle uiStepStyle, String str2, c cVar, C0358a c0358a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String str3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(list, str, (i10 & 4) != 0 ? CollectionsKt.l() : list2, uiStepStyle, (i10 & 16) != 0 ? null : str2, (i10 & 32) != 0 ? null : cVar, (i10 & 64) != 0 ? null : c0358a, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : bVar, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : map, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : k5Var, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? "0" : str3);
        }

        public static /* synthetic */ a b(a aVar, List list, String str, List list2, StepStyles.UiStepStyle uiStepStyle, String str2, c cVar, C0358a c0358a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String str3, int i10, Object obj) {
            String str4;
            List list3;
            StepStyles.UiStepStyle uiStepStyle2;
            String str5;
            c cVar2;
            C0358a c0358a2;
            b bVar2;
            boolean z12;
            boolean z13;
            Map map2;
            k5 k5Var2;
            String str6;
            if ((i10 & 1) != 0) {
                list = aVar.f27787d;
            }
            if ((i10 & 2) != 0) {
                str4 = aVar.f27788e;
            } else {
                str4 = str;
            }
            if ((i10 & 4) != 0) {
                list3 = aVar.f27789i;
            } else {
                list3 = list2;
            }
            if ((i10 & 8) != 0) {
                uiStepStyle2 = aVar.f27790o;
            } else {
                uiStepStyle2 = uiStepStyle;
            }
            if ((i10 & 16) != 0) {
                str5 = aVar.f27791p;
            } else {
                str5 = str2;
            }
            if ((i10 & 32) != 0) {
                cVar2 = aVar.f27792q;
            } else {
                cVar2 = cVar;
            }
            if ((i10 & 64) != 0) {
                c0358a2 = aVar.f27793r;
            } else {
                c0358a2 = c0358a;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar2 = aVar.f27794s;
            } else {
                bVar2 = bVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z12 = aVar.f27795t;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z13 = aVar.f27796u;
            } else {
                z13 = z11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                map2 = aVar.f27797v;
            } else {
                map2 = map;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                k5Var2 = aVar.f27798w;
            } else {
                k5Var2 = k5Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                str6 = aVar.f27799x;
            } else {
                str6 = str3;
            }
            return aVar.a(list, str4, list3, uiStepStyle2, str5, cVar2, c0358a2, bVar2, z12, z13, map2, k5Var2, str6);
        }

        public final a a(List components, String stepName, List componentErrors, StepStyles.UiStepStyle uiStepStyle, String str, c cVar, C0358a c0358a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String requestPermissionKey) {
            Intrinsics.checkNotNullParameter(components, "components");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(componentErrors, "componentErrors");
            Intrinsics.checkNotNullParameter(requestPermissionKey, "requestPermissionKey");
            return new a(components, stepName, componentErrors, uiStepStyle, str, cVar, c0358a, bVar, z10, z11, map, k5Var, requestPermissionKey);
        }

        public final C0358a c() {
            return this.f27793r;
        }

        public final List d() {
            return this.f27789i;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final Map e() {
            return this.f27797v;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f27787d, aVar.f27787d) && Intrinsics.areEqual(this.f27788e, aVar.f27788e) && Intrinsics.areEqual(this.f27789i, aVar.f27789i) && Intrinsics.areEqual(this.f27790o, aVar.f27790o) && Intrinsics.areEqual(this.f27791p, aVar.f27791p) && Intrinsics.areEqual(this.f27792q, aVar.f27792q) && Intrinsics.areEqual(this.f27793r, aVar.f27793r) && Intrinsics.areEqual(this.f27794s, aVar.f27794s) && this.f27795t == aVar.f27795t && this.f27796u == aVar.f27796u && Intrinsics.areEqual(this.f27797v, aVar.f27797v) && Intrinsics.areEqual(this.f27798w, aVar.f27798w) && Intrinsics.areEqual(this.f27799x, aVar.f27799x)) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f27791p;
        }

        public final boolean g() {
            return this.f27795t;
        }

        public final List getComponents() {
            return this.f27787d;
        }

        public final StepStyles.UiStepStyle getStyles() {
            return this.f27790o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6;
            int hashCode7 = ((((this.f27787d.hashCode() * 31) + this.f27788e.hashCode()) * 31) + this.f27789i.hashCode()) * 31;
            StepStyles.UiStepStyle uiStepStyle = this.f27790o;
            int i10 = 0;
            if (uiStepStyle == null) {
                hashCode = 0;
            } else {
                hashCode = uiStepStyle.hashCode();
            }
            int i11 = (hashCode7 + hashCode) * 31;
            String str = this.f27791p;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            c cVar = this.f27792q;
            if (cVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = cVar.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            C0358a c0358a = this.f27793r;
            if (c0358a == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = c0358a.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            b bVar = this.f27794s;
            if (bVar == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = bVar.hashCode();
            }
            int hashCode8 = (((((i14 + hashCode5) * 31) + Boolean.hashCode(this.f27795t)) * 31) + Boolean.hashCode(this.f27796u)) * 31;
            Map map = this.f27797v;
            if (map == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = map.hashCode();
            }
            int i15 = (hashCode8 + hashCode6) * 31;
            k5 k5Var = this.f27798w;
            if (k5Var != null) {
                i10 = k5Var.hashCode();
            }
            return ((i15 + i10) * 31) + this.f27799x.hashCode();
        }

        public final c i() {
            return this.f27792q;
        }

        public final b j() {
            return this.f27794s;
        }

        public final String k() {
            return this.f27799x;
        }

        public final String m() {
            return this.f27788e;
        }

        public final k5 n() {
            return this.f27798w;
        }

        public final boolean o() {
            return this.f27796u;
        }

        public String toString() {
            List list = this.f27787d;
            String str = this.f27788e;
            List list2 = this.f27789i;
            StepStyles.UiStepStyle uiStepStyle = this.f27790o;
            String str2 = this.f27791p;
            c cVar = this.f27792q;
            C0358a c0358a = this.f27793r;
            b bVar = this.f27794s;
            boolean z10 = this.f27795t;
            boolean z11 = this.f27796u;
            Map map = this.f27797v;
            k5 k5Var = this.f27798w;
            String str3 = this.f27799x;
            return "Displaying(components=" + list + ", stepName=" + str + ", componentErrors=" + list2 + ", styles=" + uiStepStyle + ", error=" + str2 + ", nfcScan=" + cVar + ", autoSubmit=" + c0358a + ", pendingAction=" + bVar + ", hasRequestedGpsPermissions=" + z10 + ", isRequestingGpsPermissions=" + z11 + ", componentParams=" + map + ", triggeringComponent=" + k5Var + ", requestPermissionKey=" + str3 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f27787d;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f27788e);
            List<Parcelable> list2 = this.f27789i;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeParcelable(this.f27790o, i10);
            dest.writeString(this.f27791p);
            c cVar = this.f27792q;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            C0358a c0358a = this.f27793r;
            if (c0358a == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                c0358a.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f27794s, i10);
            dest.writeInt(this.f27795t ? 1 : 0);
            dest.writeInt(this.f27796u ? 1 : 0);
            Map map = this.f27797v;
            if (map == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeInt(map.size());
                for (Map.Entry entry : map.entrySet()) {
                    dest.writeString((String) entry.getKey());
                    dest.writeParcelable((Parcelable) entry.getValue(), i10);
                }
            }
            dest.writeParcelable(this.f27798w, i10);
            dest.writeString(this.f27799x);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(List components, String stepName, List componentErrors, StepStyles.UiStepStyle uiStepStyle, String str, c cVar, C0358a c0358a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String requestPermissionKey) {
            super(null);
            Intrinsics.checkNotNullParameter(components, "components");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(componentErrors, "componentErrors");
            Intrinsics.checkNotNullParameter(requestPermissionKey, "requestPermissionKey");
            this.f27787d = components;
            this.f27788e = stepName;
            this.f27789i = componentErrors;
            this.f27790o = uiStepStyle;
            this.f27791p = str;
            this.f27792q = cVar;
            this.f27793r = c0358a;
            this.f27794s = bVar;
            this.f27795t = z10;
            this.f27796u = z11;
            this.f27797v = map;
            this.f27798w = k5Var;
            this.f27799x = requestPermissionKey;
        }
    }
}
