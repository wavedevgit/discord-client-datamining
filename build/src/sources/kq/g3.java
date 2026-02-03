package kq;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import aq.k5;
import aq.q5;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g3 implements Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b extends Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements b {
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0454a();

            /* renamed from: d  reason: collision with root package name */
            private final com.withpersona.sdk2.inquiry.steps.ui.components.a f35765d;

            /* renamed from: kq.g3$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0454a implements Parcelable.Creator {
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
                this.f35765d = createPersonaSheetComponent;
            }

            public final com.withpersona.sdk2.inquiry.steps.ui.components.a a() {
                return this.f35765d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof a) && Intrinsics.areEqual(this.f35765d, ((a) obj).f35765d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f35765d.hashCode();
            }

            public String toString() {
                com.withpersona.sdk2.inquiry.steps.ui.components.a aVar = this.f35765d;
                return "CreateReusablePersona(createPersonaSheetComponent=" + aVar + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f35765d, i10);
            }
        }

        /* renamed from: kq.g3$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0455b implements b {
            @NotNull
            public static final Parcelable.Creator<C0455b> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final q5 f35766d;

            /* renamed from: e  reason: collision with root package name */
            private final Map f35767e;

            /* renamed from: kq.g3$b$b$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0455b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    q5 q5Var = (q5) parcel.readParcelable(C0455b.class.getClassLoader());
                    int readInt = parcel.readInt();
                    LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        linkedHashMap.put(parcel.readString(), parcel.readParcelable(C0455b.class.getClassLoader()));
                    }
                    return new C0455b(q5Var, linkedHashMap);
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0455b[] newArray(int i10) {
                    return new C0455b[i10];
                }
            }

            public C0455b(q5 verifyPersonaButtonComponent, Map componentParams) {
                Intrinsics.checkNotNullParameter(verifyPersonaButtonComponent, "verifyPersonaButtonComponent");
                Intrinsics.checkNotNullParameter(componentParams, "componentParams");
                this.f35766d = verifyPersonaButtonComponent;
                this.f35767e = componentParams;
            }

            public final Map a() {
                return this.f35767e;
            }

            public final q5 b() {
                return this.f35766d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof C0455b)) {
                    return false;
                }
                C0455b c0455b = (C0455b) obj;
                if (Intrinsics.areEqual(this.f35766d, c0455b.f35766d) && Intrinsics.areEqual(this.f35767e, c0455b.f35767e)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (this.f35766d.hashCode() * 31) + this.f35767e.hashCode();
            }

            public String toString() {
                q5 q5Var = this.f35766d;
                Map map = this.f35767e;
                return "VerifyReusablePersona(verifyPersonaButtonComponent=" + q5Var + ", componentParams=" + map + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f35766d, i10);
                Map map = this.f35767e;
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
        private final List f35748d;

        /* renamed from: e  reason: collision with root package name */
        private final String f35749e;

        /* renamed from: i  reason: collision with root package name */
        private final List f35750i;

        /* renamed from: o  reason: collision with root package name */
        private final StepStyles.UiStepStyle f35751o;

        /* renamed from: p  reason: collision with root package name */
        private final String f35752p;

        /* renamed from: q  reason: collision with root package name */
        private final c f35753q;

        /* renamed from: r  reason: collision with root package name */
        private final C0451a f35754r;

        /* renamed from: s  reason: collision with root package name */
        private final b f35755s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f35756t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f35757u;

        /* renamed from: v  reason: collision with root package name */
        private final Map f35758v;

        /* renamed from: w  reason: collision with root package name */
        private final k5 f35759w;

        /* renamed from: x  reason: collision with root package name */
        private final String f35760x;

        /* renamed from: kq.g3$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0451a implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<C0451a> CREATOR = new C0452a();

            /* renamed from: d  reason: collision with root package name */
            private final aq.h f35761d;

            /* renamed from: e  reason: collision with root package name */
            private final int f35762e;

            /* renamed from: i  reason: collision with root package name */
            private final String f35763i;

            /* renamed from: kq.g3$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0452a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0451a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new C0451a((aq.h) parcel.readParcelable(C0451a.class.getClassLoader()), parcel.readInt(), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0451a[] newArray(int i10) {
                    return new C0451a[i10];
                }
            }

            public C0451a(aq.h component, int i10, String str) {
                Intrinsics.checkNotNullParameter(component, "component");
                this.f35761d = component;
                this.f35762e = i10;
                this.f35763i = str;
            }

            public final aq.h a() {
                return this.f35761d;
            }

            public final int b() {
                return this.f35762e;
            }

            public final String c() {
                return this.f35763i;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof C0451a)) {
                    return false;
                }
                C0451a c0451a = (C0451a) obj;
                if (Intrinsics.areEqual(this.f35761d, c0451a.f35761d) && this.f35762e == c0451a.f35762e && Intrinsics.areEqual(this.f35763i, c0451a.f35763i)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((this.f35761d.hashCode() * 31) + Integer.hashCode(this.f35762e)) * 31;
                String str = this.f35763i;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return hashCode2 + hashCode;
            }

            public String toString() {
                aq.h hVar = this.f35761d;
                int i10 = this.f35762e;
                String str = this.f35763i;
                return "AutoSubmit(component=" + hVar + ", countdown=" + i10 + ", countdownText=" + str + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f35761d, i10);
                dest.writeInt(this.f35762e);
                dest.writeString(this.f35763i);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                c createFromParcel;
                C0451a createFromParcel2;
                LinkedHashMap linkedHashMap;
                C0451a c0451a;
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
                    createFromParcel2 = C0451a.CREATOR.createFromParcel(parcel);
                }
                C0451a c0451a2 = createFromParcel2;
                b bVar2 = (b) parcel.readParcelable(a.class.getClassLoader());
                boolean z11 = true;
                if (parcel.readInt() != 0) {
                    linkedHashMap = null;
                    c0451a = c0451a2;
                    bVar = bVar2;
                    z10 = true;
                } else {
                    linkedHashMap = null;
                    c0451a = c0451a2;
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
                return new a(arrayList, readString, arrayList2, uiStepStyle, readString2, cVar, c0451a, bVar, z10, z11, linkedHashMap2, (k5) parcel.readParcelable(a.class.getClassLoader()), parcel.readString());
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
            public static final Parcelable.Creator<c> CREATOR = new C0453a();

            /* renamed from: d  reason: collision with root package name */
            private final GovernmentIdNfcScanComponent f35764d;

            /* renamed from: kq.g3$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0453a implements Parcelable.Creator {
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
                this.f35764d = component;
            }

            public final GovernmentIdNfcScanComponent a() {
                return this.f35764d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof c) && Intrinsics.areEqual(this.f35764d, ((c) obj).f35764d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f35764d.hashCode();
            }

            public String toString() {
                GovernmentIdNfcScanComponent governmentIdNfcScanComponent = this.f35764d;
                return "NfcScan(component=" + governmentIdNfcScanComponent + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f35764d, i10);
            }
        }

        public /* synthetic */ a(List list, String str, List list2, StepStyles.UiStepStyle uiStepStyle, String str2, c cVar, C0451a c0451a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String str3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(list, str, (i10 & 4) != 0 ? CollectionsKt.l() : list2, uiStepStyle, (i10 & 16) != 0 ? null : str2, (i10 & 32) != 0 ? null : cVar, (i10 & 64) != 0 ? null : c0451a, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : bVar, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : map, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : k5Var, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? "0" : str3);
        }

        public static /* synthetic */ a b(a aVar, List list, String str, List list2, StepStyles.UiStepStyle uiStepStyle, String str2, c cVar, C0451a c0451a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String str3, int i10, Object obj) {
            String str4;
            List list3;
            StepStyles.UiStepStyle uiStepStyle2;
            String str5;
            c cVar2;
            C0451a c0451a2;
            b bVar2;
            boolean z12;
            boolean z13;
            Map map2;
            k5 k5Var2;
            String str6;
            if ((i10 & 1) != 0) {
                list = aVar.f35748d;
            }
            if ((i10 & 2) != 0) {
                str4 = aVar.f35749e;
            } else {
                str4 = str;
            }
            if ((i10 & 4) != 0) {
                list3 = aVar.f35750i;
            } else {
                list3 = list2;
            }
            if ((i10 & 8) != 0) {
                uiStepStyle2 = aVar.f35751o;
            } else {
                uiStepStyle2 = uiStepStyle;
            }
            if ((i10 & 16) != 0) {
                str5 = aVar.f35752p;
            } else {
                str5 = str2;
            }
            if ((i10 & 32) != 0) {
                cVar2 = aVar.f35753q;
            } else {
                cVar2 = cVar;
            }
            if ((i10 & 64) != 0) {
                c0451a2 = aVar.f35754r;
            } else {
                c0451a2 = c0451a;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar2 = aVar.f35755s;
            } else {
                bVar2 = bVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z12 = aVar.f35756t;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z13 = aVar.f35757u;
            } else {
                z13 = z11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                map2 = aVar.f35758v;
            } else {
                map2 = map;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                k5Var2 = aVar.f35759w;
            } else {
                k5Var2 = k5Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                str6 = aVar.f35760x;
            } else {
                str6 = str3;
            }
            return aVar.a(list, str4, list3, uiStepStyle2, str5, cVar2, c0451a2, bVar2, z12, z13, map2, k5Var2, str6);
        }

        public final a a(List components, String stepName, List componentErrors, StepStyles.UiStepStyle uiStepStyle, String str, c cVar, C0451a c0451a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String requestPermissionKey) {
            Intrinsics.checkNotNullParameter(components, "components");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(componentErrors, "componentErrors");
            Intrinsics.checkNotNullParameter(requestPermissionKey, "requestPermissionKey");
            return new a(components, stepName, componentErrors, uiStepStyle, str, cVar, c0451a, bVar, z10, z11, map, k5Var, requestPermissionKey);
        }

        public final C0451a c() {
            return this.f35754r;
        }

        public final List d() {
            return this.f35750i;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final Map e() {
            return this.f35758v;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f35748d, aVar.f35748d) && Intrinsics.areEqual(this.f35749e, aVar.f35749e) && Intrinsics.areEqual(this.f35750i, aVar.f35750i) && Intrinsics.areEqual(this.f35751o, aVar.f35751o) && Intrinsics.areEqual(this.f35752p, aVar.f35752p) && Intrinsics.areEqual(this.f35753q, aVar.f35753q) && Intrinsics.areEqual(this.f35754r, aVar.f35754r) && Intrinsics.areEqual(this.f35755s, aVar.f35755s) && this.f35756t == aVar.f35756t && this.f35757u == aVar.f35757u && Intrinsics.areEqual(this.f35758v, aVar.f35758v) && Intrinsics.areEqual(this.f35759w, aVar.f35759w) && Intrinsics.areEqual(this.f35760x, aVar.f35760x)) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f35752p;
        }

        public final boolean g() {
            return this.f35756t;
        }

        public final List getComponents() {
            return this.f35748d;
        }

        public final StepStyles.UiStepStyle getStyles() {
            return this.f35751o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6;
            int hashCode7 = ((((this.f35748d.hashCode() * 31) + this.f35749e.hashCode()) * 31) + this.f35750i.hashCode()) * 31;
            StepStyles.UiStepStyle uiStepStyle = this.f35751o;
            int i10 = 0;
            if (uiStepStyle == null) {
                hashCode = 0;
            } else {
                hashCode = uiStepStyle.hashCode();
            }
            int i11 = (hashCode7 + hashCode) * 31;
            String str = this.f35752p;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            c cVar = this.f35753q;
            if (cVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = cVar.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            C0451a c0451a = this.f35754r;
            if (c0451a == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = c0451a.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            b bVar = this.f35755s;
            if (bVar == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = bVar.hashCode();
            }
            int hashCode8 = (((((i14 + hashCode5) * 31) + Boolean.hashCode(this.f35756t)) * 31) + Boolean.hashCode(this.f35757u)) * 31;
            Map map = this.f35758v;
            if (map == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = map.hashCode();
            }
            int i15 = (hashCode8 + hashCode6) * 31;
            k5 k5Var = this.f35759w;
            if (k5Var != null) {
                i10 = k5Var.hashCode();
            }
            return ((i15 + i10) * 31) + this.f35760x.hashCode();
        }

        public final c i() {
            return this.f35753q;
        }

        public final b j() {
            return this.f35755s;
        }

        public final String k() {
            return this.f35760x;
        }

        public final String m() {
            return this.f35749e;
        }

        public final k5 n() {
            return this.f35759w;
        }

        public final boolean o() {
            return this.f35757u;
        }

        public String toString() {
            List list = this.f35748d;
            String str = this.f35749e;
            List list2 = this.f35750i;
            StepStyles.UiStepStyle uiStepStyle = this.f35751o;
            String str2 = this.f35752p;
            c cVar = this.f35753q;
            C0451a c0451a = this.f35754r;
            b bVar = this.f35755s;
            boolean z10 = this.f35756t;
            boolean z11 = this.f35757u;
            Map map = this.f35758v;
            k5 k5Var = this.f35759w;
            String str3 = this.f35760x;
            return "Displaying(components=" + list + ", stepName=" + str + ", componentErrors=" + list2 + ", styles=" + uiStepStyle + ", error=" + str2 + ", nfcScan=" + cVar + ", autoSubmit=" + c0451a + ", pendingAction=" + bVar + ", hasRequestedGpsPermissions=" + z10 + ", isRequestingGpsPermissions=" + z11 + ", componentParams=" + map + ", triggeringComponent=" + k5Var + ", requestPermissionKey=" + str3 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f35748d;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f35749e);
            List<Parcelable> list2 = this.f35750i;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeParcelable(this.f35751o, i10);
            dest.writeString(this.f35752p);
            c cVar = this.f35753q;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            C0451a c0451a = this.f35754r;
            if (c0451a == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                c0451a.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f35755s, i10);
            dest.writeInt(this.f35756t ? 1 : 0);
            dest.writeInt(this.f35757u ? 1 : 0);
            Map map = this.f35758v;
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
            dest.writeParcelable(this.f35759w, i10);
            dest.writeString(this.f35760x);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(List components, String stepName, List componentErrors, StepStyles.UiStepStyle uiStepStyle, String str, c cVar, C0451a c0451a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String requestPermissionKey) {
            super(null);
            Intrinsics.checkNotNullParameter(components, "components");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(componentErrors, "componentErrors");
            Intrinsics.checkNotNullParameter(requestPermissionKey, "requestPermissionKey");
            this.f35748d = components;
            this.f35749e = stepName;
            this.f35750i = componentErrors;
            this.f35751o = uiStepStyle;
            this.f35752p = str;
            this.f35753q = cVar;
            this.f35754r = c0451a;
            this.f35755s = bVar;
            this.f35756t = z10;
            this.f35757u = z11;
            this.f35758v = map;
            this.f35759w = k5Var;
            this.f35760x = requestPermissionKey;
        }
    }
}
