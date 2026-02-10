package oo;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.document.network.a;
import com.withpersona.sdk2.inquiry.document.network.b;
import com.withpersona.sdk2.inquiry.document.network.c;
import com.withpersona.sdk2.inquiry.document.network.d;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import en.k;
import en.r;
import fq.b;
import fq.i;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.coroutines.CoroutineScope;
import nq.b;
import okio.ByteString;
import oo.c;
import oo.d;
import oo.r2;
import oo.v2;
import org.jetbrains.annotations.NotNull;
import pq.k5;
import qo.a;
import rp.c1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r2 extends en.k {

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f40837a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f40838b;

    /* renamed from: c  reason: collision with root package name */
    private final rp.c1 f40839c;

    /* renamed from: d  reason: collision with root package name */
    private final oo.c f40840d;

    /* renamed from: e  reason: collision with root package name */
    private final v2.b f40841e;

    /* renamed from: f  reason: collision with root package name */
    private final a.C0234a f40842f;

    /* renamed from: g  reason: collision with root package name */
    private final c.a f40843g;

    /* renamed from: h  reason: collision with root package name */
    private final b.a f40844h;

    /* renamed from: i  reason: collision with root package name */
    private final a.C0612a f40845i;

    /* renamed from: j  reason: collision with root package name */
    private final d.a f40846j;

    /* renamed from: k  reason: collision with root package name */
    private final jq.b f40847k;

    /* renamed from: l  reason: collision with root package name */
    private final fq.c f40848l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: oo.r2$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0566a extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final C0566a f40849a = new C0566a();

            private C0566a() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof C0566a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1245705540;
            }

            public String toString() {
                return "Back";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final b f40850a = new b();

            private b() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1143899241;
            }

            public String toString() {
                return "Cancel";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final c f40851a = new c();

            private c() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof c)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1422406686;
            }

            public String toString() {
                return "CloseUploadOptions";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final d f40852a = new d();

            private d() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -967280389;
            }

            public String toString() {
                return "DismissError";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final e f40853a = new e();

            private e() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof e)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1532240394;
            }

            public String toString() {
                return "OpenUploadOptions";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class f extends a {

            /* renamed from: a  reason: collision with root package name */
            private final String f40854a;

            /* renamed from: b  reason: collision with root package name */
            private final d.b f40855b;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(String documentId, d.b document) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(document, "document");
                this.f40854a = documentId;
                this.f40855b = document;
            }

            public final d.b a() {
                return this.f40855b;
            }

            public final String b() {
                return this.f40854a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof f)) {
                    return false;
                }
                f fVar = (f) obj;
                if (Intrinsics.areEqual(this.f40854a, fVar.f40854a) && Intrinsics.areEqual(this.f40855b, fVar.f40855b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (this.f40854a.hashCode() * 31) + this.f40855b.hashCode();
            }

            public String toString() {
                String str = this.f40854a;
                d.b bVar = this.f40855b;
                return "RemoveDocument(documentId=" + str + ", document=" + bVar + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class g extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final g f40856a = new g();

            private g() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof g)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1818587564;
            }

            public String toString() {
                return "SelectDocument";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class h extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final h f40857a = new h();

            private h() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof h)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 1457257560;
            }

            public String toString() {
                return "SelectPhotoFromLibrary";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class i extends a {

            /* renamed from: a  reason: collision with root package name */
            private final String f40858a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public i(String documentId) {
                super(null);
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                this.f40858a = documentId;
            }

            public final String a() {
                return this.f40858a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof i) && Intrinsics.areEqual(this.f40858a, ((i) obj).f40858a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f40858a.hashCode();
            }

            public String toString() {
                String str = this.f40858a;
                return "Submit(documentId=" + str + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class j extends a {

            /* renamed from: a  reason: collision with root package name */
            public static final j f40859a = new j();

            private j() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof j)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -623405138;
            }

            public String toString() {
                return "TakePhoto";
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f40860a;

        /* renamed from: b  reason: collision with root package name */
        private final String f40861b;

        /* renamed from: c  reason: collision with root package name */
        private final String f40862c;

        /* renamed from: d  reason: collision with root package name */
        private final String f40863d;

        /* renamed from: e  reason: collision with root package name */
        private final String f40864e;

        /* renamed from: f  reason: collision with root package name */
        private final String f40865f;

        /* renamed from: g  reason: collision with root package name */
        private final String f40866g;

        /* renamed from: h  reason: collision with root package name */
        private final String f40867h;

        /* renamed from: i  reason: collision with root package name */
        private final String f40868i;

        /* renamed from: j  reason: collision with root package name */
        private final String f40869j;

        /* renamed from: k  reason: collision with root package name */
        private final String f40870k;

        /* renamed from: l  reason: collision with root package name */
        private final String f40871l;

        /* renamed from: m  reason: collision with root package name */
        private final String f40872m;

        /* renamed from: n  reason: collision with root package name */
        private final e f40873n;

        /* renamed from: o  reason: collision with root package name */
        private final l f40874o;

        /* renamed from: p  reason: collision with root package name */
        private final int f40875p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f40876q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f40877r;

        /* renamed from: s  reason: collision with root package name */
        private final String f40878s;

        /* renamed from: t  reason: collision with root package name */
        private final String f40879t;

        /* renamed from: u  reason: collision with root package name */
        private final String f40880u;

        /* renamed from: v  reason: collision with root package name */
        private final String f40881v;

        /* renamed from: w  reason: collision with root package name */
        private final StepStyles.DocumentStepStyle f40882w;

        /* renamed from: x  reason: collision with root package name */
        private final NextStep.Document.AssetConfig f40883x;

        /* renamed from: y  reason: collision with root package name */
        private final PendingPageTextPosition f40884y;

        public b(String sessionToken, String inquiryId, String fromStep, String fromComponent, String str, String str2, String str3, String str4, String str5, String str6, String fieldKeyDocument, String kind, String str7, e startPage, l pages, int i10, boolean z10, boolean z11, String str8, String str9, String str10, String str11, StepStyles.DocumentStepStyle documentStepStyle, NextStep.Document.AssetConfig assetConfig, PendingPageTextPosition pendingPageTextVerticalPosition) {
            Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            Intrinsics.checkNotNullParameter(fromStep, "fromStep");
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(fieldKeyDocument, "fieldKeyDocument");
            Intrinsics.checkNotNullParameter(kind, "kind");
            Intrinsics.checkNotNullParameter(startPage, "startPage");
            Intrinsics.checkNotNullParameter(pages, "pages");
            Intrinsics.checkNotNullParameter(assetConfig, "assetConfig");
            Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
            this.f40860a = sessionToken;
            this.f40861b = inquiryId;
            this.f40862c = fromStep;
            this.f40863d = fromComponent;
            this.f40864e = str;
            this.f40865f = str2;
            this.f40866g = str3;
            this.f40867h = str4;
            this.f40868i = str5;
            this.f40869j = str6;
            this.f40870k = fieldKeyDocument;
            this.f40871l = kind;
            this.f40872m = str7;
            this.f40873n = startPage;
            this.f40874o = pages;
            this.f40875p = i10;
            this.f40876q = z10;
            this.f40877r = z11;
            this.f40878s = str8;
            this.f40879t = str9;
            this.f40880u = str10;
            this.f40881v = str11;
            this.f40882w = documentStepStyle;
            this.f40883x = assetConfig;
            this.f40884y = pendingPageTextVerticalPosition;
        }

        public final NextStep.Document.AssetConfig a() {
            return this.f40883x;
        }

        public final boolean b() {
            return this.f40876q;
        }

        public final boolean c() {
            return this.f40877r;
        }

        public final String d() {
            return this.f40866g;
        }

        public final int e() {
            return this.f40875p;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f40860a, bVar.f40860a) && Intrinsics.areEqual(this.f40861b, bVar.f40861b) && Intrinsics.areEqual(this.f40862c, bVar.f40862c) && Intrinsics.areEqual(this.f40863d, bVar.f40863d) && Intrinsics.areEqual(this.f40864e, bVar.f40864e) && Intrinsics.areEqual(this.f40865f, bVar.f40865f) && Intrinsics.areEqual(this.f40866g, bVar.f40866g) && Intrinsics.areEqual(this.f40867h, bVar.f40867h) && Intrinsics.areEqual(this.f40868i, bVar.f40868i) && Intrinsics.areEqual(this.f40869j, bVar.f40869j) && Intrinsics.areEqual(this.f40870k, bVar.f40870k) && Intrinsics.areEqual(this.f40871l, bVar.f40871l) && Intrinsics.areEqual(this.f40872m, bVar.f40872m) && Intrinsics.areEqual(this.f40873n, bVar.f40873n) && Intrinsics.areEqual(this.f40874o, bVar.f40874o) && this.f40875p == bVar.f40875p && this.f40876q == bVar.f40876q && this.f40877r == bVar.f40877r && Intrinsics.areEqual(this.f40878s, bVar.f40878s) && Intrinsics.areEqual(this.f40879t, bVar.f40879t) && Intrinsics.areEqual(this.f40880u, bVar.f40880u) && Intrinsics.areEqual(this.f40881v, bVar.f40881v) && Intrinsics.areEqual(this.f40882w, bVar.f40882w) && Intrinsics.areEqual(this.f40883x, bVar.f40883x) && this.f40884y == bVar.f40884y) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f40872m;
        }

        public final String g() {
            return this.f40870k;
        }

        public final String h() {
            return this.f40863d;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6;
            int hashCode7;
            int hashCode8;
            int hashCode9;
            int hashCode10;
            int hashCode11;
            int hashCode12 = ((((((this.f40860a.hashCode() * 31) + this.f40861b.hashCode()) * 31) + this.f40862c.hashCode()) * 31) + this.f40863d.hashCode()) * 31;
            String str = this.f40864e;
            int i10 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = (hashCode12 + hashCode) * 31;
            String str2 = this.f40865f;
            if (str2 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str2.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            String str3 = this.f40866g;
            if (str3 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str3.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            String str4 = this.f40867h;
            if (str4 == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = str4.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            String str5 = this.f40868i;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i15 = (i14 + hashCode5) * 31;
            String str6 = this.f40869j;
            if (str6 == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = str6.hashCode();
            }
            int hashCode13 = (((((i15 + hashCode6) * 31) + this.f40870k.hashCode()) * 31) + this.f40871l.hashCode()) * 31;
            String str7 = this.f40872m;
            if (str7 == null) {
                hashCode7 = 0;
            } else {
                hashCode7 = str7.hashCode();
            }
            int hashCode14 = (((((((((((hashCode13 + hashCode7) * 31) + this.f40873n.hashCode()) * 31) + this.f40874o.hashCode()) * 31) + Integer.hashCode(this.f40875p)) * 31) + Boolean.hashCode(this.f40876q)) * 31) + Boolean.hashCode(this.f40877r)) * 31;
            String str8 = this.f40878s;
            if (str8 == null) {
                hashCode8 = 0;
            } else {
                hashCode8 = str8.hashCode();
            }
            int i16 = (hashCode14 + hashCode8) * 31;
            String str9 = this.f40879t;
            if (str9 == null) {
                hashCode9 = 0;
            } else {
                hashCode9 = str9.hashCode();
            }
            int i17 = (i16 + hashCode9) * 31;
            String str10 = this.f40880u;
            if (str10 == null) {
                hashCode10 = 0;
            } else {
                hashCode10 = str10.hashCode();
            }
            int i18 = (i17 + hashCode10) * 31;
            String str11 = this.f40881v;
            if (str11 == null) {
                hashCode11 = 0;
            } else {
                hashCode11 = str11.hashCode();
            }
            int i19 = (i18 + hashCode11) * 31;
            StepStyles.DocumentStepStyle documentStepStyle = this.f40882w;
            if (documentStepStyle != null) {
                i10 = documentStepStyle.hashCode();
            }
            return ((((i19 + i10) * 31) + this.f40883x.hashCode()) * 31) + this.f40884y.hashCode();
        }

        public final String i() {
            return this.f40862c;
        }

        public final String j() {
            return this.f40861b;
        }

        public final String k() {
            return this.f40871l;
        }

        public final l l() {
            return this.f40874o;
        }

        public final String m() {
            return this.f40869j;
        }

        public final PendingPageTextPosition n() {
            return this.f40884y;
        }

        public final String o() {
            return this.f40868i;
        }

        public final String p() {
            return this.f40881v;
        }

        public final String q() {
            return this.f40880u;
        }

        public final String r() {
            return this.f40879t;
        }

        public final String s() {
            return this.f40878s;
        }

        public final String t() {
            return this.f40865f;
        }

        public String toString() {
            String str = this.f40860a;
            String str2 = this.f40861b;
            String str3 = this.f40862c;
            String str4 = this.f40863d;
            String str5 = this.f40864e;
            String str6 = this.f40865f;
            String str7 = this.f40866g;
            String str8 = this.f40867h;
            String str9 = this.f40868i;
            String str10 = this.f40869j;
            String str11 = this.f40870k;
            String str12 = this.f40871l;
            String str13 = this.f40872m;
            e eVar = this.f40873n;
            l lVar = this.f40874o;
            int i10 = this.f40875p;
            boolean z10 = this.f40876q;
            boolean z11 = this.f40877r;
            String str14 = this.f40878s;
            String str15 = this.f40879t;
            String str16 = this.f40880u;
            String str17 = this.f40881v;
            StepStyles.DocumentStepStyle documentStepStyle = this.f40882w;
            NextStep.Document.AssetConfig assetConfig = this.f40883x;
            PendingPageTextPosition pendingPageTextPosition = this.f40884y;
            return "Input(sessionToken=" + str + ", inquiryId=" + str2 + ", fromStep=" + str3 + ", fromComponent=" + str4 + ", promptTitle=" + str5 + ", promptDescription=" + str6 + ", disclaimer=" + str7 + ", submitButtonText=" + str8 + ", pendingTitle=" + str9 + ", pendingDescription=" + str10 + ", fieldKeyDocument=" + str11 + ", kind=" + str12 + ", documentId=" + str13 + ", startPage=" + eVar + ", pages=" + lVar + ", documentFileLimit=" + i10 + ", backStepEnabled=" + z10 + ", cancelButtonEnabled=" + z11 + ", permissionsTitle=" + str14 + ", permissionsRationale=" + str15 + ", permissionsModalPositiveButton=" + str16 + ", permissionsModalNegativeButton=" + str17 + ", styles=" + documentStepStyle + ", assetConfig=" + assetConfig + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
        }

        public final String u() {
            return this.f40864e;
        }

        public final String v() {
            return this.f40860a;
        }

        public final e w() {
            return this.f40873n;
        }

        public final StepStyles.DocumentStepStyle x() {
            return this.f40882w;
        }

        public final String y() {
            return this.f40867h;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class c {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final a f40885a = new a();

            private a() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 89823627;
            }

            public String toString() {
                return "Back";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final b f40886a = new b();

            private b() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1234032835;
            }

            public String toString() {
                return "Canceled";
            }
        }

        /* renamed from: oo.r2$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0567c extends c {

            /* renamed from: a  reason: collision with root package name */
            private final InternalErrorInfo f40887a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0567c(InternalErrorInfo cause) {
                super(null);
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f40887a = cause;
            }

            public final InternalErrorInfo a() {
                return this.f40887a;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof C0567c) && Intrinsics.areEqual(this.f40887a, ((C0567c) obj).f40887a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f40887a.hashCode();
            }

            public String toString() {
                InternalErrorInfo internalErrorInfo = this.f40887a;
                return "Errored(cause=" + internalErrorInfo + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends c {

            /* renamed from: a  reason: collision with root package name */
            public static final d f40888a = new d();

            private d() {
                super(null);
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return -1784519914;
            }

            public String toString() {
                return "Finished";
            }
        }

        public /* synthetic */ c(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private c() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends d {

            /* renamed from: a  reason: collision with root package name */
            private final String f40889a;

            /* renamed from: b  reason: collision with root package name */
            private final String f40890b;

            /* renamed from: c  reason: collision with root package name */
            private final jq.a f40891c;

            /* renamed from: d  reason: collision with root package name */
            private final Function0 f40892d;

            /* renamed from: e  reason: collision with root package name */
            private final Function0 f40893e;

            /* renamed from: f  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f40894f;

            /* renamed from: g  reason: collision with root package name */
            private final NextStep.Document.AssetConfig.PendingPage f40895g;

            /* renamed from: h  reason: collision with root package name */
            private final PendingPageTextPosition f40896h;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, String str2, jq.a navigationState, Function0 onBack, Function0 onCancel, StepStyles.DocumentStepStyle documentStepStyle, NextStep.Document.AssetConfig.PendingPage pendingPage, PendingPageTextPosition pendingPageTextVerticalPosition) {
                super(null);
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                Intrinsics.checkNotNullParameter(pendingPageTextVerticalPosition, "pendingPageTextVerticalPosition");
                this.f40889a = str;
                this.f40890b = str2;
                this.f40891c = navigationState;
                this.f40892d = onBack;
                this.f40893e = onCancel;
                this.f40894f = documentStepStyle;
                this.f40895g = pendingPage;
                this.f40896h = pendingPageTextVerticalPosition;
            }

            public final NextStep.Document.AssetConfig.PendingPage a() {
                return this.f40895g;
            }

            public final jq.a b() {
                return this.f40891c;
            }

            public final Function0 c() {
                return this.f40892d;
            }

            public final Function0 d() {
                return this.f40893e;
            }

            public final PendingPageTextPosition e() {
                return this.f40896h;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f40889a, aVar.f40889a) && Intrinsics.areEqual(this.f40890b, aVar.f40890b) && Intrinsics.areEqual(this.f40891c, aVar.f40891c) && Intrinsics.areEqual(this.f40892d, aVar.f40892d) && Intrinsics.areEqual(this.f40893e, aVar.f40893e) && Intrinsics.areEqual(this.f40894f, aVar.f40894f) && Intrinsics.areEqual(this.f40895g, aVar.f40895g) && this.f40896h == aVar.f40896h) {
                    return true;
                }
                return false;
            }

            public final String f() {
                return this.f40890b;
            }

            public final StepStyles.DocumentStepStyle g() {
                return this.f40894f;
            }

            public final String h() {
                return this.f40889a;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                String str = this.f40889a;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = hashCode * 31;
                String str2 = this.f40890b;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int hashCode4 = (((((((i11 + hashCode2) * 31) + this.f40891c.hashCode()) * 31) + this.f40892d.hashCode()) * 31) + this.f40893e.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f40894f;
                if (documentStepStyle == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = documentStepStyle.hashCode();
                }
                int i12 = (hashCode4 + hashCode3) * 31;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f40895g;
                if (pendingPage != null) {
                    i10 = pendingPage.hashCode();
                }
                return ((i12 + i10) * 31) + this.f40896h.hashCode();
            }

            public String toString() {
                String str = this.f40889a;
                String str2 = this.f40890b;
                jq.a aVar = this.f40891c;
                Function0 function0 = this.f40892d;
                Function0 function02 = this.f40893e;
                StepStyles.DocumentStepStyle documentStepStyle = this.f40894f;
                NextStep.Document.AssetConfig.PendingPage pendingPage = this.f40895g;
                PendingPageTextPosition pendingPageTextPosition = this.f40896h;
                return "LoadingAnimation(title=" + str + ", prompt=" + str2 + ", navigationState=" + aVar + ", onBack=" + function0 + ", onCancel=" + function02 + ", styles=" + documentStepStyle + ", assetConfig=" + pendingPage + ", pendingPageTextVerticalPosition=" + pendingPageTextPosition + ")";
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends d {

            /* renamed from: a  reason: collision with root package name */
            private final v4.h f40897a;

            /* renamed from: b  reason: collision with root package name */
            private final String f40898b;

            /* renamed from: c  reason: collision with root package name */
            private final String f40899c;

            /* renamed from: d  reason: collision with root package name */
            private final String f40900d;

            /* renamed from: e  reason: collision with root package name */
            private final String f40901e;

            /* renamed from: f  reason: collision with root package name */
            private final List f40902f;

            /* renamed from: g  reason: collision with root package name */
            private final jq.a f40903g;

            /* renamed from: h  reason: collision with root package name */
            private final Function0 f40904h;

            /* renamed from: i  reason: collision with root package name */
            private final Function0 f40905i;

            /* renamed from: j  reason: collision with root package name */
            private final Function0 f40906j;

            /* renamed from: k  reason: collision with root package name */
            private final Function0 f40907k;

            /* renamed from: l  reason: collision with root package name */
            private final Function1 f40908l;

            /* renamed from: m  reason: collision with root package name */
            private final Function0 f40909m;

            /* renamed from: n  reason: collision with root package name */
            private final Function0 f40910n;

            /* renamed from: o  reason: collision with root package name */
            private final Function0 f40911o;

            /* renamed from: p  reason: collision with root package name */
            private final boolean f40912p;

            /* renamed from: q  reason: collision with root package name */
            private final boolean f40913q;

            /* renamed from: r  reason: collision with root package name */
            private final boolean f40914r;

            /* renamed from: s  reason: collision with root package name */
            private final String f40915s;

            /* renamed from: t  reason: collision with root package name */
            private final Function0 f40916t;

            /* renamed from: u  reason: collision with root package name */
            private final StepStyles.DocumentStepStyle f40917u;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(v4.h imageLoader, String str, String str2, String str3, String str4, List documents, jq.a navigationState, Function0 openSelectFile, Function0 selectFromPhotoLibrary, Function0 openCamera, Function0 openUploadOptions, Function1 onRemove, Function0 onSubmit, Function0 onCancel, Function0 onBack, boolean z10, boolean z11, boolean z12, String str5, Function0 onErrorDismissed, StepStyles.DocumentStepStyle documentStepStyle) {
                super(null);
                Intrinsics.checkNotNullParameter(imageLoader, "imageLoader");
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(navigationState, "navigationState");
                Intrinsics.checkNotNullParameter(openSelectFile, "openSelectFile");
                Intrinsics.checkNotNullParameter(selectFromPhotoLibrary, "selectFromPhotoLibrary");
                Intrinsics.checkNotNullParameter(openCamera, "openCamera");
                Intrinsics.checkNotNullParameter(openUploadOptions, "openUploadOptions");
                Intrinsics.checkNotNullParameter(onRemove, "onRemove");
                Intrinsics.checkNotNullParameter(onSubmit, "onSubmit");
                Intrinsics.checkNotNullParameter(onCancel, "onCancel");
                Intrinsics.checkNotNullParameter(onBack, "onBack");
                Intrinsics.checkNotNullParameter(onErrorDismissed, "onErrorDismissed");
                this.f40897a = imageLoader;
                this.f40898b = str;
                this.f40899c = str2;
                this.f40900d = str3;
                this.f40901e = str4;
                this.f40902f = documents;
                this.f40903g = navigationState;
                this.f40904h = openSelectFile;
                this.f40905i = selectFromPhotoLibrary;
                this.f40906j = openCamera;
                this.f40907k = openUploadOptions;
                this.f40908l = onRemove;
                this.f40909m = onSubmit;
                this.f40910n = onCancel;
                this.f40911o = onBack;
                this.f40912p = z10;
                this.f40913q = z11;
                this.f40914r = z12;
                this.f40915s = str5;
                this.f40916t = onErrorDismissed;
                this.f40917u = documentStepStyle;
            }

            public final boolean a() {
                return this.f40913q;
            }

            public final boolean b() {
                return this.f40912p;
            }

            public final String c() {
                return this.f40900d;
            }

            public final List d() {
                return this.f40902f;
            }

            public final String e() {
                return this.f40915s;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f40897a, bVar.f40897a) && Intrinsics.areEqual(this.f40898b, bVar.f40898b) && Intrinsics.areEqual(this.f40899c, bVar.f40899c) && Intrinsics.areEqual(this.f40900d, bVar.f40900d) && Intrinsics.areEqual(this.f40901e, bVar.f40901e) && Intrinsics.areEqual(this.f40902f, bVar.f40902f) && Intrinsics.areEqual(this.f40903g, bVar.f40903g) && Intrinsics.areEqual(this.f40904h, bVar.f40904h) && Intrinsics.areEqual(this.f40905i, bVar.f40905i) && Intrinsics.areEqual(this.f40906j, bVar.f40906j) && Intrinsics.areEqual(this.f40907k, bVar.f40907k) && Intrinsics.areEqual(this.f40908l, bVar.f40908l) && Intrinsics.areEqual(this.f40909m, bVar.f40909m) && Intrinsics.areEqual(this.f40910n, bVar.f40910n) && Intrinsics.areEqual(this.f40911o, bVar.f40911o) && this.f40912p == bVar.f40912p && this.f40913q == bVar.f40913q && this.f40914r == bVar.f40914r && Intrinsics.areEqual(this.f40915s, bVar.f40915s) && Intrinsics.areEqual(this.f40916t, bVar.f40916t) && Intrinsics.areEqual(this.f40917u, bVar.f40917u)) {
                    return true;
                }
                return false;
            }

            public final v4.h f() {
                return this.f40897a;
            }

            public final jq.a g() {
                return this.f40903g;
            }

            public final Function0 h() {
                return this.f40911o;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3;
                int hashCode4;
                int hashCode5;
                int hashCode6 = this.f40897a.hashCode() * 31;
                String str = this.f40898b;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int i11 = (hashCode6 + hashCode) * 31;
                String str2 = this.f40899c;
                if (str2 == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = str2.hashCode();
                }
                int i12 = (i11 + hashCode2) * 31;
                String str3 = this.f40900d;
                if (str3 == null) {
                    hashCode3 = 0;
                } else {
                    hashCode3 = str3.hashCode();
                }
                int i13 = (i12 + hashCode3) * 31;
                String str4 = this.f40901e;
                if (str4 == null) {
                    hashCode4 = 0;
                } else {
                    hashCode4 = str4.hashCode();
                }
                int hashCode7 = (((((((((((((((((((((((((((i13 + hashCode4) * 31) + this.f40902f.hashCode()) * 31) + this.f40903g.hashCode()) * 31) + this.f40904h.hashCode()) * 31) + this.f40905i.hashCode()) * 31) + this.f40906j.hashCode()) * 31) + this.f40907k.hashCode()) * 31) + this.f40908l.hashCode()) * 31) + this.f40909m.hashCode()) * 31) + this.f40910n.hashCode()) * 31) + this.f40911o.hashCode()) * 31) + Boolean.hashCode(this.f40912p)) * 31) + Boolean.hashCode(this.f40913q)) * 31) + Boolean.hashCode(this.f40914r)) * 31;
                String str5 = this.f40915s;
                if (str5 == null) {
                    hashCode5 = 0;
                } else {
                    hashCode5 = str5.hashCode();
                }
                int hashCode8 = (((hashCode7 + hashCode5) * 31) + this.f40916t.hashCode()) * 31;
                StepStyles.DocumentStepStyle documentStepStyle = this.f40917u;
                if (documentStepStyle != null) {
                    i10 = documentStepStyle.hashCode();
                }
                return hashCode8 + i10;
            }

            public final Function0 i() {
                return this.f40910n;
            }

            public final Function0 j() {
                return this.f40916t;
            }

            public final Function1 k() {
                return this.f40908l;
            }

            public final Function0 l() {
                return this.f40909m;
            }

            public final Function0 m() {
                return this.f40907k;
            }

            public final String n() {
                return this.f40899c;
            }

            public final StepStyles.DocumentStepStyle o() {
                return this.f40917u;
            }

            public final boolean p() {
                return this.f40914r;
            }

            public final String q() {
                return this.f40901e;
            }

            public final String r() {
                return this.f40898b;
            }

            public String toString() {
                v4.h hVar = this.f40897a;
                String str = this.f40898b;
                String str2 = this.f40899c;
                String str3 = this.f40900d;
                String str4 = this.f40901e;
                List list = this.f40902f;
                jq.a aVar = this.f40903g;
                Function0 function0 = this.f40904h;
                Function0 function02 = this.f40905i;
                Function0 function03 = this.f40906j;
                Function0 function04 = this.f40907k;
                Function1 function1 = this.f40908l;
                Function0 function05 = this.f40909m;
                Function0 function06 = this.f40910n;
                Function0 function07 = this.f40911o;
                boolean z10 = this.f40912p;
                boolean z11 = this.f40913q;
                boolean z12 = this.f40914r;
                String str5 = this.f40915s;
                Function0 function08 = this.f40916t;
                StepStyles.DocumentStepStyle documentStepStyle = this.f40917u;
                return "ReviewCaptures(imageLoader=" + hVar + ", title=" + str + ", prompt=" + str2 + ", disclaimer=" + str3 + ", submitButtonText=" + str4 + ", documents=" + list + ", navigationState=" + aVar + ", openSelectFile=" + function0 + ", selectFromPhotoLibrary=" + function02 + ", openCamera=" + function03 + ", openUploadOptions=" + function04 + ", onRemove=" + function1 + ", onSubmit=" + function05 + ", onCancel=" + function06 + ", onBack=" + function07 + ", disabled=" + z10 + ", addButtonEnabled=" + z11 + ", submitButtonEnabled=" + z12 + ", error=" + str5 + ", onErrorDismissed=" + function08 + ", styles=" + documentStepStyle + ")";
            }
        }

        public /* synthetic */ d(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private d() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface e extends Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements e {

            /* renamed from: d  reason: collision with root package name */
            public static final a f40918d = new a();
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0568a();

            /* renamed from: oo.r2$e$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0568a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    parcel.readInt();
                    return a.f40918d;
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final a[] newArray(int i10) {
                    return new a[i10];
                }
            }

            private a() {
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj || (obj instanceof a)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return 813153962;
            }

            public String toString() {
                return "Prompt";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeInt(1);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements e {
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final String f40919d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new b(parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final b[] newArray(int i10) {
                    return new b[i10];
                }
            }

            public b(String documentId) {
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                this.f40919d = documentId;
            }

            public final String a() {
                return this.f40919d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof b) && Intrinsics.areEqual(this.f40919d, ((b) obj).f40919d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f40919d.hashCode();
            }

            public String toString() {
                String str = this.f40919d;
                return "Review(documentId=" + str + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f40919d);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class f implements Parcelable {

        /* renamed from: d  reason: collision with root package name */
        private final a f40920d;

        /* renamed from: e  reason: collision with root package name */
        private final InterfaceC0569f f40921e;

        /* renamed from: i  reason: collision with root package name */
        private final String f40922i;

        /* renamed from: o  reason: collision with root package name */
        private final List f40923o;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: d  reason: collision with root package name */
            public static final a f40924d = new a("None", 0);

            /* renamed from: e  reason: collision with root package name */
            public static final a f40925e = new a("CheckCameraPermissions", 1);

            /* renamed from: i  reason: collision with root package name */
            public static final a f40926i = new a("CameraRunning", 2);

            /* renamed from: o  reason: collision with root package name */
            public static final a f40927o = new a("SelectFileFromDocuments", 3);

            /* renamed from: p  reason: collision with root package name */
            public static final a f40928p = new a("SelectImageFromPhotoLibrary", 4);

            /* renamed from: q  reason: collision with root package name */
            private static final /* synthetic */ a[] f40929q;

            /* renamed from: r  reason: collision with root package name */
            private static final /* synthetic */ EnumEntries f40930r;

            static {
                a[] a10 = a();
                f40929q = a10;
                f40930r = hs.a.a(a10);
            }

            private a(String str, int i10) {
            }

            private static final /* synthetic */ a[] a() {
                return new a[]{f40924d, f40925e, f40926i, f40927o, f40928p};
            }

            public static a valueOf(String str) {
                return (a) Enum.valueOf(a.class, str);
            }

            public static a[] values() {
                return (a[]) f40929q.clone();
            }
        }

        /* renamed from: oo.r2$f$f  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public interface InterfaceC0569f extends Parcelable {

            /* renamed from: oo.r2$f$f$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements InterfaceC0569f {

                /* renamed from: d  reason: collision with root package name */
                public static final a f40955d = new a();
                @NotNull
                public static final Parcelable.Creator<a> CREATOR = new C0570a();

                /* renamed from: oo.r2$f$f$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class C0570a implements Parcelable.Creator {
                    @Override // android.os.Parcelable.Creator
                    /* renamed from: a */
                    public final a createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        parcel.readInt();
                        return a.f40955d;
                    }

                    @Override // android.os.Parcelable.Creator
                    /* renamed from: b */
                    public final a[] newArray(int i10) {
                        return new a[i10];
                    }
                }

                private a() {
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj || (obj instanceof a)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return 1079141691;
                }

                public String toString() {
                    return "CreateDocument";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeInt(1);
                }
            }

            /* renamed from: oo.r2$f$f$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b implements InterfaceC0569f {
                @NotNull
                public static final Parcelable.Creator<b> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f40956d;

                /* renamed from: oo.r2$f$f$b$a */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class a implements Parcelable.Creator {
                    @Override // android.os.Parcelable.Creator
                    /* renamed from: a */
                    public final b createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        return new b(parcel.readString());
                    }

                    @Override // android.os.Parcelable.Creator
                    /* renamed from: b */
                    public final b[] newArray(int i10) {
                        return new b[i10];
                    }
                }

                public b(String documentId) {
                    Intrinsics.checkNotNullParameter(documentId, "documentId");
                    this.f40956d = documentId;
                }

                public final String a() {
                    return this.f40956d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof b) && Intrinsics.areEqual(this.f40956d, ((b) obj).f40956d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f40956d.hashCode();
                }

                public String toString() {
                    String str = this.f40956d;
                    return "DeleteFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f40956d);
                }
            }

            /* renamed from: oo.r2$f$f$c */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class c implements InterfaceC0569f {
                @NotNull
                public static final Parcelable.Creator<c> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f40957d;

                /* renamed from: oo.r2$f$f$c$a */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class a implements Parcelable.Creator {
                    @Override // android.os.Parcelable.Creator
                    /* renamed from: a */
                    public final c createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        return new c(parcel.readString());
                    }

                    @Override // android.os.Parcelable.Creator
                    /* renamed from: b */
                    public final c[] newArray(int i10) {
                        return new c[i10];
                    }
                }

                public c(String documentId) {
                    Intrinsics.checkNotNullParameter(documentId, "documentId");
                    this.f40957d = documentId;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof c) && Intrinsics.areEqual(this.f40957d, ((c) obj).f40957d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f40957d.hashCode();
                }

                public String toString() {
                    String str = this.f40957d;
                    return "ReadyToSubmit(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f40957d);
                }
            }

            /* renamed from: oo.r2$f$f$d */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class d implements InterfaceC0569f {
                @NotNull
                public static final Parcelable.Creator<d> CREATOR = new a();

                /* renamed from: d  reason: collision with root package name */
                private final String f40958d;

                /* renamed from: oo.r2$f$f$d$a */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
                public static final class a implements Parcelable.Creator {
                    @Override // android.os.Parcelable.Creator
                    /* renamed from: a */
                    public final d createFromParcel(Parcel parcel) {
                        Intrinsics.checkNotNullParameter(parcel, "parcel");
                        return new d(parcel.readString());
                    }

                    @Override // android.os.Parcelable.Creator
                    /* renamed from: b */
                    public final d[] newArray(int i10) {
                        return new d[i10];
                    }
                }

                public d(String documentId) {
                    Intrinsics.checkNotNullParameter(documentId, "documentId");
                    this.f40958d = documentId;
                }

                public final String a() {
                    return this.f40958d;
                }

                @Override // android.os.Parcelable
                public final int describeContents() {
                    return 0;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if ((obj instanceof d) && Intrinsics.areEqual(this.f40958d, ((d) obj).f40958d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    return this.f40958d.hashCode();
                }

                public String toString() {
                    String str = this.f40958d;
                    return "UploadFiles(documentId=" + str + ")";
                }

                @Override // android.os.Parcelable
                public final void writeToParcel(Parcel dest, int i10) {
                    Intrinsics.checkNotNullParameter(dest, "dest");
                    dest.writeString(this.f40958d);
                }
            }
        }

        public /* synthetic */ f(a aVar, InterfaceC0569f interfaceC0569f, String str, List list, DefaultConstructorMarker defaultConstructorMarker) {
            this(aVar, interfaceC0569f, str, list);
        }

        public static /* synthetic */ f d(f fVar, InterfaceC0569f interfaceC0569f, String str, List list, oo.d dVar, int i10, Object obj) {
            if (obj == null) {
                if ((i10 & 2) != 0) {
                    str = null;
                }
                if ((i10 & 4) != 0) {
                    list = null;
                }
                if ((i10 & 8) != 0) {
                    dVar = null;
                }
                return fVar.c(interfaceC0569f, str, list, dVar);
            }
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: copyWithUploadState");
        }

        public final f a(a captureState) {
            Intrinsics.checkNotNullParameter(captureState, "captureState");
            if (this instanceof d) {
                return d.k((d) this, captureState, null, null, false, 14, null);
            }
            if (this instanceof b) {
                return b.k((b) this, null, null, captureState, null, null, false, false, null, 251, null);
            }
            if (this instanceof c) {
                return c.k((c) this, null, null, captureState, null, null, false, false, null, 251, null);
            }
            if (this instanceof e) {
                return this;
            }
            throw new as.p();
        }

        public final f b(boolean z10) {
            if (this instanceof d) {
                return d.k((d) this, null, null, null, z10, 7, null);
            }
            if (this instanceof b) {
                return b.k((b) this, null, null, null, null, null, false, z10, null, 191, null);
            }
            if (this instanceof c) {
                return c.k((c) this, null, null, null, null, null, false, z10, null, 191, null);
            }
            if (this instanceof e) {
                return this;
            }
            throw new as.p();
        }

        public final f c(InterfaceC0569f uploadState, String str, List list, oo.d dVar) {
            Intrinsics.checkNotNullParameter(uploadState, "uploadState");
            if (this instanceof d) {
                d dVar2 = (d) this;
                if (str == null) {
                    str = dVar2.f();
                }
                return d.k(dVar2, null, uploadState, str, false, 9, null);
            } else if (this instanceof b) {
                b bVar = (b) this;
                if (list == null) {
                    list = bVar.g();
                }
                return b.k(bVar, list, null, null, uploadState, dVar, false, false, null, 230, null);
            } else if (this instanceof c) {
                c cVar = (c) this;
                if (str == null) {
                    str = cVar.f();
                }
                String str2 = str;
                if (list == null) {
                    list = cVar.g();
                }
                return c.k(cVar, list, str2, null, uploadState, dVar, false, false, null, 228, null);
            } else if (this instanceof e) {
                return e.k((e) this, null, null, uploadState, null, 11, null);
            } else {
                throw new as.p();
            }
        }

        public a e() {
            return this.f40920d;
        }

        public abstract String f();

        public List g() {
            return this.f40923o;
        }

        public abstract InterfaceC0569f i();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class e extends f {
            @NotNull
            public static final Parcelable.Creator<e> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f40951p;

            /* renamed from: q  reason: collision with root package name */
            private final String f40952q;

            /* renamed from: r  reason: collision with root package name */
            private final InterfaceC0569f f40953r;

            /* renamed from: s  reason: collision with root package name */
            private final String f40954s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final e createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    int readInt = parcel.readInt();
                    ArrayList arrayList = new ArrayList(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        arrayList.add(parcel.readParcelable(e.class.getClassLoader()));
                    }
                    return new e(arrayList, parcel.readString(), (InterfaceC0569f) parcel.readParcelable(e.class.getClassLoader()), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final e[] newArray(int i10) {
                    return new e[i10];
                }
            }

            public /* synthetic */ e(List list, String str, InterfaceC0569f interfaceC0569f, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? InterfaceC0569f.a.f40955d : interfaceC0569f, (i10 & 8) != 0 ? null : str2);
            }

            public static /* synthetic */ e k(e eVar, List list, String str, InterfaceC0569f interfaceC0569f, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = eVar.f40951p;
                }
                if ((i10 & 2) != 0) {
                    str = eVar.f40952q;
                }
                if ((i10 & 4) != 0) {
                    interfaceC0569f = eVar.f40953r;
                }
                if ((i10 & 8) != 0) {
                    str2 = eVar.f40954s;
                }
                return eVar.j(list, str, interfaceC0569f, str2);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof e)) {
                    return false;
                }
                e eVar = (e) obj;
                if (Intrinsics.areEqual(this.f40951p, eVar.f40951p) && Intrinsics.areEqual(this.f40952q, eVar.f40952q) && Intrinsics.areEqual(this.f40953r, eVar.f40953r) && Intrinsics.areEqual(this.f40954s, eVar.f40954s)) {
                    return true;
                }
                return false;
            }

            @Override // oo.r2.f
            public String f() {
                return this.f40952q;
            }

            @Override // oo.r2.f
            public List g() {
                return this.f40951p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((this.f40951p.hashCode() * 31) + this.f40952q.hashCode()) * 31) + this.f40953r.hashCode()) * 31;
                String str = this.f40954s;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return hashCode2 + hashCode;
            }

            @Override // oo.r2.f
            public InterfaceC0569f i() {
                return this.f40953r;
            }

            public final e j(List documents, String documentId, InterfaceC0569f uploadState, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new e(documents, documentId, uploadState, str);
            }

            public String toString() {
                List list = this.f40951p;
                String str = this.f40952q;
                InterfaceC0569f interfaceC0569f = this.f40953r;
                String str2 = this.f40954s;
                return "UploadDocument(documents=" + list + ", documentId=" + str + ", uploadState=" + interfaceC0569f + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f40951p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f40952q);
                dest.writeParcelable(this.f40953r, i10);
                dest.writeString(this.f40954s);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(List documents, String documentId, InterfaceC0569f uploadState, String str) {
                super(a.f40924d, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f40951p = documents;
                this.f40952q = documentId;
                this.f40953r = uploadState;
                this.f40954s = str;
            }
        }

        private f(a aVar, InterfaceC0569f interfaceC0569f, String str, List list) {
            this.f40920d = aVar;
            this.f40921e = interfaceC0569f;
            this.f40922i = str;
            this.f40923o = list;
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends f {
            @NotNull
            public static final Parcelable.Creator<b> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f40931p;

            /* renamed from: q  reason: collision with root package name */
            private final String f40932q;

            /* renamed from: r  reason: collision with root package name */
            private final a f40933r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0569f f40934s;

            /* renamed from: t  reason: collision with root package name */
            private final oo.d f40935t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f40936u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f40937v;

            /* renamed from: w  reason: collision with root package name */
            private final String f40938w;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final b createFromParcel(Parcel parcel) {
                    boolean z10;
                    boolean z11;
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    int readInt = parcel.readInt();
                    ArrayList arrayList = new ArrayList(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        arrayList.add(parcel.readParcelable(b.class.getClassLoader()));
                    }
                    String readString = parcel.readString();
                    a valueOf = a.valueOf(parcel.readString());
                    InterfaceC0569f interfaceC0569f = (InterfaceC0569f) parcel.readParcelable(b.class.getClassLoader());
                    oo.d dVar = (oo.d) parcel.readParcelable(b.class.getClassLoader());
                    boolean z12 = true;
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    } else {
                        z10 = true;
                        z12 = false;
                    }
                    if (parcel.readInt() != 0) {
                        z11 = z10;
                    } else {
                        z11 = false;
                    }
                    return new b(arrayList, readString, valueOf, interfaceC0569f, dVar, z12, z11, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final b[] newArray(int i10) {
                    return new b[i10];
                }
            }

            public /* synthetic */ b(List list, String str, a aVar, InterfaceC0569f interfaceC0569f, oo.d dVar, boolean z10, boolean z11, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? a.f40924d : aVar, (i10 & 8) != 0 ? InterfaceC0569f.a.f40955d : interfaceC0569f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ b k(b bVar, List list, String str, a aVar, InterfaceC0569f interfaceC0569f, oo.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = bVar.f40931p;
                }
                if ((i10 & 2) != 0) {
                    str = bVar.f40932q;
                }
                if ((i10 & 4) != 0) {
                    aVar = bVar.f40933r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0569f = bVar.f40934s;
                }
                if ((i10 & 16) != 0) {
                    dVar = bVar.f40935t;
                }
                if ((i10 & 32) != 0) {
                    z10 = bVar.f40936u;
                }
                if ((i10 & 64) != 0) {
                    z11 = bVar.f40937v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = bVar.f40938w;
                }
                boolean z12 = z11;
                String str3 = str2;
                oo.d dVar2 = dVar;
                boolean z13 = z10;
                return bVar.j(list, str, aVar, interfaceC0569f, dVar2, z13, z12, str3);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // oo.r2.f
            public a e() {
                return this.f40933r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof b)) {
                    return false;
                }
                b bVar = (b) obj;
                if (Intrinsics.areEqual(this.f40931p, bVar.f40931p) && Intrinsics.areEqual(this.f40932q, bVar.f40932q) && this.f40933r == bVar.f40933r && Intrinsics.areEqual(this.f40934s, bVar.f40934s) && Intrinsics.areEqual(this.f40935t, bVar.f40935t) && this.f40936u == bVar.f40936u && this.f40937v == bVar.f40937v && Intrinsics.areEqual(this.f40938w, bVar.f40938w)) {
                    return true;
                }
                return false;
            }

            @Override // oo.r2.f
            public String f() {
                return this.f40932q;
            }

            @Override // oo.r2.f
            public List g() {
                return this.f40931p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((((((this.f40931p.hashCode() * 31) + this.f40932q.hashCode()) * 31) + this.f40933r.hashCode()) * 31) + this.f40934s.hashCode()) * 31;
                oo.d dVar = this.f40935t;
                int i10 = 0;
                if (dVar == null) {
                    hashCode = 0;
                } else {
                    hashCode = dVar.hashCode();
                }
                int hashCode3 = (((((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f40936u)) * 31) + Boolean.hashCode(this.f40937v)) * 31;
                String str = this.f40938w;
                if (str != null) {
                    i10 = str.hashCode();
                }
                return hashCode3 + i10;
            }

            @Override // oo.r2.f
            public InterfaceC0569f i() {
                return this.f40934s;
            }

            public final b j(List documents, String documentId, a captureState, InterfaceC0569f uploadState, oo.d dVar, boolean z10, boolean z11, String str) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new b(documents, documentId, captureState, uploadState, dVar, z10, z11, str);
            }

            public final oo.d l() {
                return this.f40935t;
            }

            public final String o() {
                return this.f40938w;
            }

            public final boolean p() {
                return this.f40936u;
            }

            public final boolean q() {
                return this.f40937v;
            }

            public String toString() {
                List list = this.f40931p;
                String str = this.f40932q;
                a aVar = this.f40933r;
                InterfaceC0569f interfaceC0569f = this.f40934s;
                oo.d dVar = this.f40935t;
                boolean z10 = this.f40936u;
                boolean z11 = this.f40937v;
                String str2 = this.f40938w;
                return "ReviewCaptures(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0569f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f40931p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f40932q);
                dest.writeString(this.f40933r.name());
                dest.writeParcelable(this.f40934s, i10);
                dest.writeParcelable(this.f40935t, i10);
                dest.writeInt(this.f40936u ? 1 : 0);
                dest.writeInt(this.f40937v ? 1 : 0);
                dest.writeString(this.f40938w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(List documents, String documentId, a captureState, InterfaceC0569f uploadState, oo.d dVar, boolean z10, boolean z11, String str) {
                super(captureState, uploadState, documentId, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(documentId, "documentId");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f40931p = documents;
                this.f40932q = documentId;
                this.f40933r = captureState;
                this.f40934s = uploadState;
                this.f40935t = dVar;
                this.f40936u = z10;
                this.f40937v = z11;
                this.f40938w = str;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends f {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final List f40939p;

            /* renamed from: q  reason: collision with root package name */
            private final String f40940q;

            /* renamed from: r  reason: collision with root package name */
            private final a f40941r;

            /* renamed from: s  reason: collision with root package name */
            private final InterfaceC0569f f40942s;

            /* renamed from: t  reason: collision with root package name */
            private final oo.d f40943t;

            /* renamed from: u  reason: collision with root package name */
            private final boolean f40944u;

            /* renamed from: v  reason: collision with root package name */
            private final boolean f40945v;

            /* renamed from: w  reason: collision with root package name */
            private final String f40946w;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    boolean z10;
                    boolean z11;
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    int readInt = parcel.readInt();
                    ArrayList arrayList = new ArrayList(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        arrayList.add(parcel.readParcelable(c.class.getClassLoader()));
                    }
                    String readString = parcel.readString();
                    a valueOf = a.valueOf(parcel.readString());
                    InterfaceC0569f interfaceC0569f = (InterfaceC0569f) parcel.readParcelable(c.class.getClassLoader());
                    oo.d dVar = (oo.d) parcel.readParcelable(c.class.getClassLoader());
                    boolean z12 = true;
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    } else {
                        z10 = true;
                        z12 = false;
                    }
                    if (parcel.readInt() != 0) {
                        z11 = z10;
                    } else {
                        z11 = false;
                    }
                    return new c(arrayList, readString, valueOf, interfaceC0569f, dVar, z12, z11, parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public /* synthetic */ c(List list, String str, a aVar, InterfaceC0569f interfaceC0569f, oo.d dVar, boolean z10, boolean z11, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this(list, str, (i10 & 4) != 0 ? a.f40924d : aVar, (i10 & 8) != 0 ? InterfaceC0569f.a.f40955d : interfaceC0569f, (i10 & 16) != 0 ? null : dVar, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str2);
            }

            public static /* synthetic */ c k(c cVar, List list, String str, a aVar, InterfaceC0569f interfaceC0569f, oo.d dVar, boolean z10, boolean z11, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    list = cVar.f40939p;
                }
                if ((i10 & 2) != 0) {
                    str = cVar.f40940q;
                }
                if ((i10 & 4) != 0) {
                    aVar = cVar.f40941r;
                }
                if ((i10 & 8) != 0) {
                    interfaceC0569f = cVar.f40942s;
                }
                if ((i10 & 16) != 0) {
                    dVar = cVar.f40943t;
                }
                if ((i10 & 32) != 0) {
                    z10 = cVar.f40944u;
                }
                if ((i10 & 64) != 0) {
                    z11 = cVar.f40945v;
                }
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                    str2 = cVar.f40946w;
                }
                boolean z12 = z11;
                String str3 = str2;
                oo.d dVar2 = dVar;
                boolean z13 = z10;
                return cVar.j(list, str, aVar, interfaceC0569f, dVar2, z13, z12, str3);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // oo.r2.f
            public a e() {
                return this.f40941r;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof c)) {
                    return false;
                }
                c cVar = (c) obj;
                if (Intrinsics.areEqual(this.f40939p, cVar.f40939p) && Intrinsics.areEqual(this.f40940q, cVar.f40940q) && this.f40941r == cVar.f40941r && Intrinsics.areEqual(this.f40942s, cVar.f40942s) && Intrinsics.areEqual(this.f40943t, cVar.f40943t) && this.f40944u == cVar.f40944u && this.f40945v == cVar.f40945v && Intrinsics.areEqual(this.f40946w, cVar.f40946w)) {
                    return true;
                }
                return false;
            }

            @Override // oo.r2.f
            public String f() {
                return this.f40940q;
            }

            @Override // oo.r2.f
            public List g() {
                return this.f40939p;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2;
                int hashCode3 = this.f40939p.hashCode() * 31;
                String str = this.f40940q;
                int i10 = 0;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                int hashCode4 = (((((hashCode3 + hashCode) * 31) + this.f40941r.hashCode()) * 31) + this.f40942s.hashCode()) * 31;
                oo.d dVar = this.f40943t;
                if (dVar == null) {
                    hashCode2 = 0;
                } else {
                    hashCode2 = dVar.hashCode();
                }
                int hashCode5 = (((((hashCode4 + hashCode2) * 31) + Boolean.hashCode(this.f40944u)) * 31) + Boolean.hashCode(this.f40945v)) * 31;
                String str2 = this.f40946w;
                if (str2 != null) {
                    i10 = str2.hashCode();
                }
                return hashCode5 + i10;
            }

            @Override // oo.r2.f
            public InterfaceC0569f i() {
                return this.f40942s;
            }

            public final c j(List documents, String str, a captureState, InterfaceC0569f uploadState, oo.d dVar, boolean z10, boolean z11, String str2) {
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new c(documents, str, captureState, uploadState, dVar, z10, z11, str2);
            }

            public final String l() {
                return this.f40946w;
            }

            public final boolean o() {
                return this.f40944u;
            }

            public final boolean p() {
                return this.f40945v;
            }

            public String toString() {
                List list = this.f40939p;
                String str = this.f40940q;
                a aVar = this.f40941r;
                InterfaceC0569f interfaceC0569f = this.f40942s;
                oo.d dVar = this.f40943t;
                boolean z10 = this.f40944u;
                boolean z11 = this.f40945v;
                String str2 = this.f40946w;
                return "ReviewCapturesWithoutDocumentId(documents=" + list + ", documentId=" + str + ", captureState=" + aVar + ", uploadState=" + interfaceC0569f + ", documentFileToDelete=" + dVar + ", reloadingFromPreviousSession=" + z10 + ", shouldShowUploadOptionsDialog=" + z11 + ", error=" + str2 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                List<Parcelable> list = this.f40939p;
                dest.writeInt(list.size());
                for (Parcelable parcelable : list) {
                    dest.writeParcelable(parcelable, i10);
                }
                dest.writeString(this.f40940q);
                dest.writeString(this.f40941r.name());
                dest.writeParcelable(this.f40942s, i10);
                dest.writeParcelable(this.f40943t, i10);
                dest.writeInt(this.f40944u ? 1 : 0);
                dest.writeInt(this.f40945v ? 1 : 0);
                dest.writeString(this.f40946w);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(List documents, String str, a captureState, InterfaceC0569f uploadState, oo.d dVar, boolean z10, boolean z11, String str2) {
                super(captureState, uploadState, str, documents, null);
                Intrinsics.checkNotNullParameter(documents, "documents");
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f40939p = documents;
                this.f40940q = str;
                this.f40941r = captureState;
                this.f40942s = uploadState;
                this.f40943t = dVar;
                this.f40944u = z10;
                this.f40945v = z11;
                this.f40946w = str2;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class d extends f {
            @NotNull
            public static final Parcelable.Creator<d> CREATOR = new a();

            /* renamed from: p  reason: collision with root package name */
            private final a f40947p;

            /* renamed from: q  reason: collision with root package name */
            private final InterfaceC0569f f40948q;

            /* renamed from: r  reason: collision with root package name */
            private final String f40949r;

            /* renamed from: s  reason: collision with root package name */
            private final boolean f40950s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final d createFromParcel(Parcel parcel) {
                    boolean z10;
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    a valueOf = a.valueOf(parcel.readString());
                    InterfaceC0569f interfaceC0569f = (InterfaceC0569f) parcel.readParcelable(d.class.getClassLoader());
                    String readString = parcel.readString();
                    if (parcel.readInt() != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    return new d(valueOf, interfaceC0569f, readString, z10);
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final d[] newArray(int i10) {
                    return new d[i10];
                }
            }

            public /* synthetic */ d(a aVar, InterfaceC0569f interfaceC0569f, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
                this((i10 & 1) != 0 ? a.f40924d : aVar, (i10 & 2) != 0 ? InterfaceC0569f.a.f40955d : interfaceC0569f, str, (i10 & 8) != 0 ? false : z10);
            }

            public static /* synthetic */ d k(d dVar, a aVar, InterfaceC0569f interfaceC0569f, String str, boolean z10, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    aVar = dVar.f40947p;
                }
                if ((i10 & 2) != 0) {
                    interfaceC0569f = dVar.f40948q;
                }
                if ((i10 & 4) != 0) {
                    str = dVar.f40949r;
                }
                if ((i10 & 8) != 0) {
                    z10 = dVar.f40950s;
                }
                return dVar.j(aVar, interfaceC0569f, str, z10);
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            @Override // oo.r2.f
            public a e() {
                return this.f40947p;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof d)) {
                    return false;
                }
                d dVar = (d) obj;
                if (this.f40947p == dVar.f40947p && Intrinsics.areEqual(this.f40948q, dVar.f40948q) && Intrinsics.areEqual(this.f40949r, dVar.f40949r) && this.f40950s == dVar.f40950s) {
                    return true;
                }
                return false;
            }

            @Override // oo.r2.f
            public String f() {
                return this.f40949r;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((this.f40947p.hashCode() * 31) + this.f40948q.hashCode()) * 31;
                String str = this.f40949r;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return ((hashCode2 + hashCode) * 31) + Boolean.hashCode(this.f40950s);
            }

            @Override // oo.r2.f
            public InterfaceC0569f i() {
                return this.f40948q;
            }

            public final d j(a captureState, InterfaceC0569f uploadState, String str, boolean z10) {
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                return new d(captureState, uploadState, str, z10);
            }

            public final boolean l() {
                return this.f40950s;
            }

            public String toString() {
                a aVar = this.f40947p;
                InterfaceC0569f interfaceC0569f = this.f40948q;
                String str = this.f40949r;
                boolean z10 = this.f40950s;
                return "Start(captureState=" + aVar + ", uploadState=" + interfaceC0569f + ", documentId=" + str + ", shouldShowUploadOptionsDialog=" + z10 + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeString(this.f40947p.name());
                dest.writeParcelable(this.f40948q, i10);
                dest.writeString(this.f40949r);
                dest.writeInt(this.f40950s ? 1 : 0);
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public d(a captureState, InterfaceC0569f uploadState, String str, boolean z10) {
                super(captureState, uploadState, str, CollectionsKt.l(), null);
                Intrinsics.checkNotNullParameter(captureState, "captureState");
                Intrinsics.checkNotNullParameter(uploadState, "uploadState");
                this.f40947p = captureState;
                this.f40948q = uploadState;
                this.f40949r = str;
                this.f40950s = z10;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class g {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f40959a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f40960b;

        static {
            int[] iArr = new int[rp.g1.values().length];
            try {
                iArr[rp.g1.f47600d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[rp.g1.f47601e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[rp.g1.f47602i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f40959a = iArr;
            int[] iArr2 = new int[f.a.values().length];
            try {
                iArr2[f.a.f40924d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[f.a.f40925e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[f.a.f40926i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[f.a.f40927o.ordinal()] = 4;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[f.a.f40928p.ordinal()] = 5;
            } catch (NoSuchFieldError unused8) {
            }
            f40960b = iArr2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f40961d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f40962e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f40963i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ String f40964o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(k.a aVar, r2 r2Var, String str, Continuation continuation) {
            super(2, continuation);
            this.f40962e = aVar;
            this.f40963i = r2Var;
            this.f40964o = str;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(String str, r.c cVar) {
            f.c cVar2;
            Object c10 = cVar.c();
            if (c10 instanceof f.c) {
                cVar2 = (f.c) c10;
            } else {
                cVar2 = null;
            }
            if (cVar2 == null) {
                return Unit.f31987a;
            }
            cVar.e(new f.b(cVar2.g(), str, null, new f.InterfaceC0569f.d(str), null, false, false, cVar2.l(), 116, null));
            return Unit.f31987a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f40962e, this.f40963i, this.f40964o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            gs.b.f();
            if (this.f40961d == 0) {
                kotlin.c.b(obj);
                en.h c10 = this.f40962e.c();
                r2 r2Var = this.f40963i;
                final String str = this.f40964o;
                d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.s2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.h.k(str, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f31987a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f40965d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ k.a f40966e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ r2 f40967i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ f.InterfaceC0569f f40968o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(k.a aVar, r2 r2Var, f.InterfaceC0569f interfaceC0569f, Continuation continuation) {
            super(2, continuation);
            this.f40966e = aVar;
            this.f40967i = r2Var;
            this.f40968o = interfaceC0569f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit k(f.InterfaceC0569f interfaceC0569f, r.c cVar) {
            cVar.e(f.d((f) cVar.c(), new f.InterfaceC0569f.c(((f.InterfaceC0569f.d) interfaceC0569f).a()), null, null, null, 14, null));
            return Unit.f31987a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f40966e, this.f40967i, this.f40968o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            en.r d10;
            gs.b.f();
            if (this.f40965d == 0) {
                kotlin.c.b(obj);
                en.h c10 = this.f40966e.c();
                r2 r2Var = this.f40967i;
                final f.InterfaceC0569f interfaceC0569f = this.f40968o;
                d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.t2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit k10;
                        k10 = r2.i.k(r2.f.InterfaceC0569f.this, (r.c) obj2);
                        return k10;
                    }
                }, 1, null);
                c10.d(d10);
                return Unit.f31987a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f31987a);
        }
    }

    public r2(v4.h imageLoader, Context applicationContext, rp.c1 permissionRequestWorkflow, oo.c documentCameraWorker, v2.b documentsSelectWorkerFactory, a.C0234a documentCreateWorker, c.a documentLoadWorker, b.a documentFileUploadWorker, a.C0612a documentFileDeleteWorker, d.a documentSubmitWorker, jq.b navigationStateManager, fq.c externalEventLogger) {
        Intrinsics.checkNotNullParameter(imageLoader, "imageLoader");
        Intrinsics.checkNotNullParameter(applicationContext, "applicationContext");
        Intrinsics.checkNotNullParameter(permissionRequestWorkflow, "permissionRequestWorkflow");
        Intrinsics.checkNotNullParameter(documentCameraWorker, "documentCameraWorker");
        Intrinsics.checkNotNullParameter(documentsSelectWorkerFactory, "documentsSelectWorkerFactory");
        Intrinsics.checkNotNullParameter(documentCreateWorker, "documentCreateWorker");
        Intrinsics.checkNotNullParameter(documentLoadWorker, "documentLoadWorker");
        Intrinsics.checkNotNullParameter(documentFileUploadWorker, "documentFileUploadWorker");
        Intrinsics.checkNotNullParameter(documentFileDeleteWorker, "documentFileDeleteWorker");
        Intrinsics.checkNotNullParameter(documentSubmitWorker, "documentSubmitWorker");
        Intrinsics.checkNotNullParameter(navigationStateManager, "navigationStateManager");
        Intrinsics.checkNotNullParameter(externalEventLogger, "externalEventLogger");
        this.f40837a = imageLoader;
        this.f40838b = applicationContext;
        this.f40839c = permissionRequestWorkflow;
        this.f40840d = documentCameraWorker;
        this.f40841e = documentsSelectWorkerFactory;
        this.f40842f = documentCreateWorker;
        this.f40843g = documentLoadWorker;
        this.f40844h = documentFileUploadWorker;
        this.f40845i = documentFileDeleteWorker;
        this.f40846j = documentSubmitWorker;
        this.f40847k = navigationStateManager;
        this.f40848l = externalEventLogger;
    }

    private final List A0(u uVar, final k.a aVar) {
        return new b.a().a(uVar.b(), new Function1() { // from class: oo.v0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit C0;
                C0 = r2.C0(r2.this, aVar, (k5) obj);
                return C0;
            }
        }).a(uVar.c(), new Function1() { // from class: oo.w0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit D0;
                D0 = r2.D0(r2.this, aVar, (k5) obj);
                return D0;
            }
        }).a(uVar.d(), new Function1() { // from class: oo.x0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit E0;
                E0 = r2.E0(r2.this, aVar, (k5) obj);
                return E0;
            }
        }).a(uVar.a(), new Function1() { // from class: oo.y0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit F0;
                F0 = r2.F0(r2.this, aVar, (k5) obj);
                return F0;
            }
        }).b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f40850a);
        return Unit.f31987a;
    }

    private final List B0(b3 b3Var, final k.a aVar) {
        return new b.a().a(b3Var.b(), new Function1() { // from class: oo.a1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit G0;
                G0 = r2.G0(r2.this, aVar, (k5) obj);
                return G0;
            }
        }).a(b3Var.c(), new Function1() { // from class: oo.b1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit H0;
                H0 = r2.H0(r2.this, aVar, (k5) obj);
                return H0;
            }
        }).a(b3Var.d(), new Function1() { // from class: oo.c1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit I0;
                I0 = r2.I0(r2.this, aVar, (k5) obj);
                return I0;
            }
        }).b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r B1(final r2 r2Var, final f fVar, final c1.a it) {
        en.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.z0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit C1;
                C1 = r2.C1(c1.a.this, r2Var, fVar, (r.c) obj);
                return C1;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.g.f40856a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C1(c1.a aVar, r2 r2Var, f fVar, r.c action) {
        f a10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = g.f40959a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new as.p();
            }
            action.e(fVar.a(f.a.f40924d));
        } else {
            oo.c cVar = r2Var.f40840d;
            String string = r2Var.f40838b.getString(tp.e.f49783a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f40926i);
            } else {
                a10 = fVar.a(f.a.f40924d);
            }
            action.e(a10);
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f40857a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r D1(r2 r2Var, final f fVar, final c.b it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0243b) {
            d11 = en.z.d(r2Var, null, new Function1() { // from class: oo.d1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit E1;
                    E1 = r2.E1(r2.f.this, it, (r.c) obj);
                    return E1;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof c.b.a) {
            d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.e1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit F1;
                    F1 = r2.F1(c.b.this, (r.c) obj);
                    return F1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f40859a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E1(f fVar, c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.b bVar2 = (f.b) fVar;
        action.e(f.b.k(bVar2, ((c.b.C0243b) bVar).a(), null, null, new f.InterfaceC0569f.c(bVar2.f()), null, false, false, null, 214, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.e.f40853a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F1(c.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0567c(((c.b.a) bVar).a()));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.g.f40856a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f40856a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.h.f40857a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f40857a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(r2 r2Var, k.a aVar, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        r2Var.L0(aVar, a.j.f40859a);
        return Unit.f31987a;
    }

    private final void I1(f.a aVar, final b bVar, final f fVar, k.a aVar2) {
        v2 e10;
        int i10 = g.f40960b[aVar.ordinal()];
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                if (i10 != 4 && i10 != 5) {
                    throw new as.p();
                }
                if (fVar.e() == f.a.f40927o) {
                    e10 = this.f40841e.c();
                } else {
                    e10 = this.f40841e.e();
                }
                en.w.l(aVar2, e10, Reflection.typeOf(v2.class), "", new Function1() { // from class: oo.h1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        en.r N1;
                        N1 = r2.N1(r2.this, bVar, fVar, (v2.c) obj);
                        return N1;
                    }
                });
                return;
            }
            en.w.l(aVar2, this.f40840d, Reflection.typeOf(oo.c.class), "", new Function1() { // from class: oo.g1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r K1;
                    K1 = r2.K1(r2.this, bVar, (c.b) obj);
                    return K1;
                }
            });
        }
    }

    private final void J1(final f.InterfaceC0569f interfaceC0569f, b bVar, f fVar, k.a aVar) {
        if (Intrinsics.areEqual(interfaceC0569f, f.InterfaceC0569f.a.f40955d)) {
            if (fVar.f() == null) {
                en.w.l(aVar, this.f40842f.a(bVar.v(), bVar.k(), bVar.g(), bVar.e()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.a.class), "", new Function1() { // from class: oo.j1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        en.r R1;
                        R1 = r2.R1(r2.this, (a.b) obj);
                        return R1;
                    }
                });
                return;
            }
            return;
        }
        final d.b bVar2 = null;
        if (interfaceC0569f instanceof f.InterfaceC0569f.d) {
            ArrayList arrayList = new ArrayList();
            for (Object obj : fVar.g()) {
                if (obj instanceof d.a) {
                    arrayList.add(obj);
                }
            }
            if (arrayList.isEmpty()) {
                aVar.a("upload_complete", new i(aVar, this, interfaceC0569f, null));
                return;
            }
            for (final d.a aVar2 : CollectionsKt.a1(arrayList, 3)) {
                en.w.l(aVar, this.f40844h.a(bVar.v(), ((f.InterfaceC0569f.d) interfaceC0569f).a(), aVar2), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.b.class), aVar2.c(), new Function1() { // from class: oo.k1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        en.r U1;
                        U1 = r2.U1(r2.this, interfaceC0569f, aVar2, (b.AbstractC0237b) obj2);
                        return U1;
                    }
                });
            }
        } else if (interfaceC0569f instanceof f.InterfaceC0569f.b) {
            if (fVar instanceof f.b) {
                f.b bVar3 = (f.b) fVar;
                oo.d l10 = bVar3.l();
                if (l10 instanceof d.b) {
                    bVar2 = (d.b) l10;
                }
                if (bVar2 == null) {
                    return;
                }
                en.w.l(aVar, this.f40845i.a(bVar.v(), bVar3.f(), bVar2), Reflection.typeOf(qo.a.class), "", new Function1() { // from class: oo.l1
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        en.r Z1;
                        Z1 = r2.Z1(r2.this, bVar2, interfaceC0569f, (a.b) obj2);
                        return Z1;
                    }
                });
            }
        } else if (!(interfaceC0569f instanceof f.InterfaceC0569f.c)) {
            throw new as.p();
        }
    }

    private final void K0(b bVar, f fVar) {
        fq.b bVar2;
        if (fVar.e() == f.a.f40926i) {
            bVar2 = b.d.f24186a;
        } else if (fVar instanceof f.d) {
            bVar2 = b.C0326b.f24184a;
        } else if (fVar instanceof f.b) {
            bVar2 = b.c.f24185a;
        } else if (fVar instanceof f.c) {
            bVar2 = b.c.f24185a;
        } else if (fVar instanceof f.e) {
            bVar2 = b.a.f24183a;
        } else {
            throw new as.p();
        }
        this.f40848l.c(new i.b(bVar.i(), bVar2));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r K1(r2 r2Var, final b bVar, final c.b it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof c.b.C0561b) {
            d11 = en.z.d(r2Var, null, new Function1() { // from class: oo.d2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit L1;
                    L1 = r2.L1(c.b.this, bVar, (r.c) obj);
                    return L1;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, c.b.a.f40697a)) {
            d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.e2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M1;
                    M1 = r2.M1((r.c) obj);
                    return M1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    private final void L0(k.a aVar, final a aVar2) {
        en.r d10;
        if (Intrinsics.areEqual(aVar2, a.b.f40850a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.p1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit M0;
                    M0 = r2.M0((r.c) obj);
                    return M0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.C0566a.f40849a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.r1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit N0;
                    N0 = r2.N0((r.c) obj);
                    return N0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.g.f40856a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.s1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O0;
                    O0 = r2.O0((r.c) obj);
                    return O0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.h.f40857a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.t1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P0;
                    P0 = r2.P0((r.c) obj);
                    return P0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.j.f40859a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.u1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q0;
                    Q0 = r2.Q0((r.c) obj);
                    return Q0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.e.f40853a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.v1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit R0;
                    R0 = r2.R0((r.c) obj);
                    return R0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.c.f40851a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.w1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S0;
                    S0 = r2.S0((r.c) obj);
                    return S0;
                }
            }, 1, null);
        } else if (aVar2 instanceof a.f) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.x1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T0;
                    T0 = r2.T0(r2.a.this, (r.c) obj);
                    return T0;
                }
            }, 1, null);
        } else if (Intrinsics.areEqual(aVar2, a.d.f40852a)) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.y1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U0;
                    U0 = r2.U0((r.c) obj);
                    return U0;
                }
            }, 1, null);
        } else if (aVar2 instanceof a.i) {
            d10 = en.z.d(this, null, new Function1() { // from class: oo.z1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V0;
                    V0 = r2.V0(r2.a.this, (r.c) obj);
                    return V0;
                }
            }, 1, null);
        } else {
            throw new as.p();
        }
        aVar.c().d(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L1(c.b bVar, b bVar2, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.M0(((f) action.c()).g(), new d.a(((c.b.C0561b) bVar).a(), oo.a.f40670i, 0, 4, null)), bVar2.e()), ((f) action.c()).f(), null, ((f) action.c()).i(), null, false, false, null, 244, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.b.f40886a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f40924d));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.a.f40885a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r N1(final r2 r2Var, final b bVar, final f fVar, final v2.c it) {
        en.r d10;
        en.r d11;
        en.r d12;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof v2.c.C0572c) {
            d12 = en.z.d(r2Var, null, new Function1() { // from class: oo.f2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit O1;
                    O1 = r2.O1(v2.c.this, bVar, (r.c) obj);
                    return O1;
                }
            }, 1, null);
            return d12;
        } else if (it instanceof v2.c.b) {
            d11 = en.z.d(r2Var, null, new Function1() { // from class: oo.g2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit P1;
                    P1 = r2.P1(v2.c.this, bVar, r2Var, (r.c) obj);
                    return P1;
                }
            }, 1, null);
            return d11;
        } else if (Intrinsics.areEqual(it, v2.c.a.f41007a)) {
            d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.h2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Q1;
                    Q1 = r2.Q1(r2.f.this, (r.c) obj);
                    return Q1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f40927o).b(false));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O1(v2.c cVar, b bVar, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0569f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.C0572c) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).g(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, null, 244, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f40928p).b(false));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P1(v2.c cVar, b bVar, r2 r2Var, r.c action) {
        List c10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f.InterfaceC0569f i10 = ((f) action.c()).i();
        c10 = u2.c(((v2.c.b) cVar).a());
        action.e(new f.c(CollectionsKt.a1(CollectionsKt.L0(((f) action.c()).g(), c10), bVar.e()), ((f) action.c()).f(), null, i10, null, false, false, r2Var.f40838b.getString(tp.e.f49792j), 116, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).a(f.a.f40925e).b(false));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q1(f fVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(fVar.a(f.a.f40924d));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(true));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r R1(r2 r2Var, final a.b it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof a.b.C0236b) {
            d11 = en.z.d(r2Var, null, new Function1() { // from class: oo.a2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit S1;
                    S1 = r2.S1(a.b.this, (r.c) obj);
                    return S1;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof a.b.C0235a) {
            d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.c2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T1;
                    T1 = r2.T1(a.b.this, (r.c) obj);
                    return T1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.e(((f) action.c()).b(false));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0236b c0236b = (a.b.C0236b) bVar;
        action.e(f.d((f) action.c(), new f.InterfaceC0569f.c(c0236b.a()), c0236b.a(), null, null, 12, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        if (action.c() instanceof f.b) {
            a.f fVar = (a.f) aVar;
            action.e(f.d((f) action.c(), new f.InterfaceC0569f.b(fVar.b()), null, null, fVar.a(), 6, null));
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T1(a.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.b.C0235a c0235a = (a.b.C0235a) bVar;
        if (!c0235a.a().isRecoverable()) {
            action.d(new c.C0567c(c0235a.a()));
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        f fVar = (f) action.c();
        if (fVar instanceof f.b) {
            action.e(f.b.k((f.b) fVar, null, null, null, null, null, false, false, null, 127, null));
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r U1(final r2 r2Var, final f.InterfaceC0569f interfaceC0569f, final d.a aVar, final b.AbstractC0237b response) {
        en.r d10;
        en.r d11;
        en.r d12;
        en.r d13;
        Intrinsics.checkNotNullParameter(response, "response");
        if (response instanceof b.AbstractC0237b.d) {
            d13 = en.z.d(r2Var, null, new Function1() { // from class: oo.i2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit V1;
                    V1 = r2.V1(r2.f.InterfaceC0569f.this, response, (r.c) obj);
                    return V1;
                }
            }, 1, null);
            return d13;
        } else if (response instanceof b.AbstractC0237b.c) {
            d12 = en.z.d(r2Var, null, new Function1() { // from class: oo.j2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit W1;
                    W1 = r2.W1(d.a.this, response, (r.c) obj);
                    return W1;
                }
            }, 1, null);
            return d12;
        } else if (response instanceof b.AbstractC0237b.a) {
            d11 = en.z.d(r2Var, null, new Function1() { // from class: oo.k2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit X1;
                    X1 = r2.X1(d.a.this, interfaceC0569f, response, r2Var, (r.c) obj);
                    return X1;
                }
            }, 1, null);
            return d11;
        } else if (response instanceof b.AbstractC0237b.C0238b) {
            d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.l2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit Y1;
                    Y1 = r2.Y1(b.AbstractC0237b.this, (r.c) obj);
                    return Y1;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V0(a aVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        a.i iVar = (a.i) aVar;
        action.e(new f.e(((f) action.c()).g(), iVar.a(), new f.InterfaceC0569f.c(iVar.a()), null, 8, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V1(f.InterfaceC0569f interfaceC0569f, b.AbstractC0237b abstractC0237b, r.c action) {
        f.InterfaceC0569f cVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List<Parcelable> g10 = ((f) action.c()).g();
        ArrayList<oo.d> arrayList = new ArrayList(CollectionsKt.w(g10, 10));
        for (Parcelable parcelable : g10) {
            b.AbstractC0237b.d dVar = (b.AbstractC0237b.d) abstractC0237b;
            if (Intrinsics.areEqual(parcelable, dVar.b())) {
                parcelable = dVar.a();
            }
            arrayList.add(parcelable);
        }
        if (!arrayList.isEmpty()) {
            for (oo.d dVar2 : arrayList) {
                if (dVar2 instanceof d.a) {
                    cVar = new f.InterfaceC0569f.d(((f.InterfaceC0569f.d) interfaceC0569f).a());
                    break;
                }
            }
        }
        cVar = new f.InterfaceC0569f.c(((f.InterfaceC0569f.d) interfaceC0569f).a());
        action.e(f.d((f) action.c(), cVar, null, arrayList, null, 10, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W1(d.a aVar, b.AbstractC0237b abstractC0237b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List<Parcelable> g10 = ((f) action.c()).g();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(g10, 10));
        for (Parcelable parcelable : g10) {
            if ((parcelable instanceof d.a) && Intrinsics.areEqual(parcelable, aVar)) {
                parcelable = d.a.b((d.a) parcelable, null, null, ((b.AbstractC0237b.c) abstractC0237b).a(), 3, null);
            }
            arrayList.add(parcelable);
        }
        action.e(f.d((f) action.c(), ((f) action.c()).i(), null, arrayList, null, 10, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0566a.f40849a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X1(d.a aVar, f.InterfaceC0569f interfaceC0569f, b.AbstractC0237b abstractC0237b, r2 r2Var, r.c action) {
        f.InterfaceC0569f dVar;
        String d10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        List I0 = CollectionsKt.I0(((f) action.c()).g(), aVar);
        List<oo.d> list = I0;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (oo.d dVar2 : list) {
                if (dVar2 instanceof d.a) {
                    dVar = new f.InterfaceC0569f.d(((f.InterfaceC0569f.d) interfaceC0569f).a());
                    break;
                }
            }
        }
        dVar = new f.InterfaceC0569f.c(((f.InterfaceC0569f.d) interfaceC0569f).a());
        f.InterfaceC0569f interfaceC0569f2 = dVar;
        String a10 = ((f.InterfaceC0569f.d) interfaceC0569f).a();
        f.a aVar2 = f.a.f40924d;
        d10 = u2.d(((b.AbstractC0237b.a) abstractC0237b).a(), r2Var.f40838b);
        action.e(new f.b(I0, a10, aVar2, interfaceC0569f2, null, false, false, d10, 80, null));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f40850a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y1(b.AbstractC0237b abstractC0237b, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0567c(((b.AbstractC0237b.C0238b) abstractC0237b).a()));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z0(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f40859a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r Z1(r2 r2Var, final d.b bVar, final f.InterfaceC0569f interfaceC0569f, final a.b response) {
        en.r d10;
        Intrinsics.checkNotNullParameter(response, "response");
        d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.n2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit a22;
                a22 = r2.a2(d.b.this, interfaceC0569f, response, (r.c) obj);
                return a22;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f40853a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a2(d.b bVar, f.InterfaceC0569f interfaceC0569f, a.b bVar2, r.c action) {
        f.b bVar3;
        f.InterfaceC0569f dVar;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        Object c10 = action.c();
        if (c10 instanceof f.b) {
            bVar3 = (f.b) c10;
        } else {
            bVar3 = null;
        }
        f.b bVar4 = bVar3;
        if (bVar4 == null) {
            return Unit.f31987a;
        }
        List I0 = CollectionsKt.I0(bVar4.g(), bVar);
        List<oo.d> list = I0;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (oo.d dVar2 : list) {
                if (dVar2 instanceof d.a) {
                    dVar = new f.InterfaceC0569f.d(((f.InterfaceC0569f.b) interfaceC0569f).a());
                    break;
                }
            }
        }
        dVar = new f.InterfaceC0569f.c(((f.InterfaceC0569f.b) interfaceC0569f).a());
        f.InterfaceC0569f interfaceC0569f2 = dVar;
        if (bVar2 instanceof a.b.C0614b) {
            action.e(f.b.k(bVar4, I0, null, null, interfaceC0569f2, null, false, false, null, 230, null));
        } else if (bVar2 instanceof a.b.C0613a) {
            action.d(new c.C0567c(((a.b.C0613a) bVar2).a()));
        } else {
            throw new as.p();
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b1(r2 r2Var, k.a aVar, f fVar, d.b document) {
        Intrinsics.checkNotNullParameter(document, "document");
        r2Var.L0(aVar, new a.f(((f.b) fVar).f(), document));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c1(r2 r2Var, k.a aVar, f fVar) {
        r2Var.L0(aVar, new a.i(((f.b) fVar).f()));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f40850a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0566a.f40849a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f40852a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r g1(final r2 r2Var, final f fVar, final c1.a it) {
        en.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.i1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit h12;
                h12 = r2.h1(c1.a.this, r2Var, fVar, (r.c) obj);
                return h12;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h1(c1.a aVar, r2 r2Var, f fVar, r.c action) {
        f a10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = g.f40959a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new as.p();
            }
            action.e(fVar.a(f.a.f40924d));
        } else {
            oo.c cVar = r2Var.f40840d;
            String string = r2Var.f40838b.getString(tp.e.f49783a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f40926i);
            } else {
                a10 = fVar.a(f.a.f40924d);
            }
            action.e(a10);
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f40851a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f40851a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.g.f40856a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.h.f40857a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.j.f40859a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.e.f40853a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o1(d.b it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p1() {
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f40850a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.C0566a.f40849a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.d.f40852a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r t1(final r2 r2Var, final f fVar, final c1.a it) {
        en.r d10;
        Intrinsics.checkNotNullParameter(it, "it");
        d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.o1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit u12;
                u12 = r2.u1(c1.a.this, r2Var, fVar, (r.c) obj);
                return u12;
            }
        }, 1, null);
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u1(c1.a aVar, r2 r2Var, f fVar, r.c action) {
        f a10;
        Intrinsics.checkNotNullParameter(action, "$this$action");
        int i10 = g.f40959a[aVar.a().a().ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                throw new as.p();
            }
            action.e(fVar.a(f.a.f40924d));
        } else {
            oo.c cVar = r2Var.f40840d;
            String string = r2Var.f40838b.getString(tp.e.f49783a);
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            if (cVar.c(string)) {
                a10 = fVar.a(f.a.f40926i);
            } else {
                a10 = fVar.a(f.a.f40924d);
            }
            action.e(a10);
        }
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.c.f40851a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.r w1(r2 r2Var, final d.b it) {
        en.r d10;
        en.r d11;
        Intrinsics.checkNotNullParameter(it, "it");
        if (Intrinsics.areEqual(it, d.b.C0245b.f19611a)) {
            d11 = en.z.d(r2Var, null, new Function1() { // from class: oo.m1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit x12;
                    x12 = r2.x1((r.c) obj);
                    return x12;
                }
            }, 1, null);
            return d11;
        } else if (it instanceof d.b.a) {
            d10 = en.z.d(r2Var, null, new Function1() { // from class: oo.n1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit y12;
                    y12 = r2.y1(d.b.this, (r.c) obj);
                    return y12;
                }
            }, 1, null);
            return d10;
        } else {
            throw new as.p();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x1(r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(c.d.f40888a);
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y1(d.b bVar, r.c action) {
        Intrinsics.checkNotNullParameter(action, "$this$action");
        action.d(new c.C0567c(((d.b.a) bVar).a()));
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z1(r2 r2Var, k.a aVar) {
        r2Var.L0(aVar, a.b.f40850a);
        return Unit.f31987a;
    }

    @Override // en.k
    /* renamed from: J0 */
    public f d(b props, en.i iVar) {
        f b10;
        Intrinsics.checkNotNullParameter(props, "props");
        if (iVar != null) {
            ByteString b11 = iVar.b();
            Object obj = null;
            if (b11.G() <= 0) {
                b11 = null;
            }
            if (b11 != null) {
                Parcel obtain = Parcel.obtain();
                Intrinsics.checkNotNullExpressionValue(obtain, "obtain()");
                byte[] L = b11.L();
                obtain.unmarshall(L, 0, L.length);
                obtain.setDataPosition(0);
                Object readParcelable = obtain.readParcelable(en.i.class.getClassLoader());
                Intrinsics.checkNotNull(readParcelable);
                Intrinsics.checkNotNullExpressionValue(readParcelable, "parcel.readParcelable<T>…class.java.classLoader)!!");
                obtain.recycle();
                obj = readParcelable;
            }
            f fVar = (f) obj;
            if (fVar != null && (b10 = fVar.b(false)) != null) {
                return b10;
            }
        }
        e w10 = props.w();
        if (Intrinsics.areEqual(w10, e.a.f40918d)) {
            return new f.d(null, null, props.f(), false, 11, null);
        }
        if (w10 instanceof e.b) {
            return new f.b(CollectionsKt.l(), ((e.b) props.w()).a(), null, null, null, true, false, null, 220, null);
        }
        throw new as.p();
    }

    @Override // en.k
    /* renamed from: W0 */
    public Object f(b renderProps, final f renderState, final k.a context) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        Intrinsics.checkNotNullParameter(renderState, "renderState");
        Intrinsics.checkNotNullParameter(context, "context");
        this.f40847k.c(renderProps.b(), renderProps.c(), !(renderState instanceof f.e));
        I1(renderState.e(), renderProps, renderState, context);
        J1(renderState.i(), renderProps, renderState, context);
        K0(renderProps, renderState);
        if (renderState instanceof f.d) {
            Object iVar = new oo.i(nq.c.a(renderProps.l().a()), A0(renderProps.l().a(), context), this.f40847k.b(), new Function0() { // from class: oo.y
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit X0;
                    X0 = r2.X0(r2.this, context);
                    return X0;
                }
            }, new Function0() { // from class: oo.a0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit Y0;
                    Y0 = r2.Y0(r2.this, context);
                    return Y0;
                }
            });
            f.d dVar = (f.d) renderState;
            if (dVar.l()) {
                iVar = op.d.a(nq.m.f38354a.j(nq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: oo.m0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit j12;
                        j12 = r2.j1(r2.this, context);
                        return j12;
                    }
                }, renderProps.l().b().a()), iVar, "document_upload_options_dialog");
            }
            boolean z10 = dVar.e() == f.a.f40925e;
            rp.d0 d0Var = rp.d0.f47574d;
            String s10 = renderProps.s();
            String str = s10 != null ? s10 : "";
            String r10 = renderProps.r();
            if (r10 == null) {
                r10 = this.f40838b.getString(tp.e.f49785c);
                Intrinsics.checkNotNullExpressionValue(r10, "getString(...)");
            }
            Context context2 = this.f40838b;
            String string = context2.getString(tp.e.f49784b, bq.f.b(context2));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return rp.l1.e(iVar, context, z10, d0Var, false, str, r10, string, renderProps.q(), renderProps.p(), null, null, null, this.f40839c, renderProps.x(), null, new Function1() { // from class: oo.n0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r B1;
                    B1 = r2.B1(r2.this, renderState, (c1.a) obj);
                    return B1;
                }
            }, 19976, null);
        } else if (renderState instanceof f.b) {
            f.b bVar = (f.b) renderState;
            if (bVar.p()) {
                en.w.l(context, this.f40843g.a(renderProps.v(), bVar.f()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.c.class), "", new Function1() { // from class: oo.o0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        en.r D1;
                        D1 = r2.D1(r2.this, renderState, (c.b) obj);
                        return D1;
                    }
                });
            }
            d.b bVar2 = new d.b(this.f40837a, renderProps.u(), renderProps.t(), renderProps.d(), renderProps.y(), bVar.g(), this.f40847k.b(), new Function0() { // from class: oo.p0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit G1;
                    G1 = r2.G1(r2.this, context);
                    return G1;
                }
            }, new Function0() { // from class: oo.q0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit H1;
                    H1 = r2.H1(r2.this, context);
                    return H1;
                }
            }, new Function0() { // from class: oo.r0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit Z0;
                    Z0 = r2.Z0(r2.this, context);
                    return Z0;
                }
            }, new Function0() { // from class: oo.s0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit a12;
                    a12 = r2.a1(r2.this, context);
                    return a12;
                }
            }, new Function1() { // from class: oo.t0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit b12;
                    b12 = r2.b1(r2.this, context, renderState, (d.b) obj);
                    return b12;
                }
            }, new Function0() { // from class: oo.j0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit c12;
                    c12 = r2.c1(r2.this, context, renderState);
                    return c12;
                }
            }, new Function0() { // from class: oo.u0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit d12;
                    d12 = r2.d1(r2.this, context);
                    return d12;
                }
            }, new Function0() { // from class: oo.f1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit e12;
                    e12 = r2.e1(r2.this, context);
                    return e12;
                }
            }, bVar.p(), bVar.g().size() < renderProps.e(), !bVar.g().isEmpty() && Intrinsics.areEqual(bVar.i(), new f.InterfaceC0569f.c(bVar.f())), bVar.o(), new Function0() { // from class: oo.q1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f12;
                    f12 = r2.f1(r2.this, context);
                    return f12;
                }
            }, renderProps.x());
            boolean z11 = bVar.e() == f.a.f40925e;
            rp.d0 d0Var2 = rp.d0.f47574d;
            String s11 = renderProps.s();
            if (s11 == null) {
                s11 = "";
            }
            String r11 = renderProps.r();
            if (r11 == null) {
                r11 = this.f40838b.getString(tp.e.f49785c);
                Intrinsics.checkNotNullExpressionValue(r11, "getString(...)");
            }
            Context context3 = this.f40838b;
            String string2 = context3.getString(tp.e.f49784b, bq.f.b(context3));
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            op.c e10 = rp.l1.e(bVar2, context, z11, d0Var2, false, s11, r11, string2, renderProps.q(), renderProps.p(), null, null, null, this.f40839c, renderProps.x(), null, new Function1() { // from class: oo.b2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r g12;
                    g12 = r2.g1(r2.this, renderState, (c1.a) obj);
                    return g12;
                }
            }, 19976, null);
            if (bVar.q()) {
                return op.d.a(nq.m.f38354a.j(nq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: oo.m2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit i12;
                        i12 = r2.i1(r2.this, context);
                        return i12;
                    }
                }, renderProps.l().b().a()), e10, "document_upload_screen");
            }
            return new op.c(e10, CollectionsKt.l(), "document_upload_screen");
        } else if (renderState instanceof f.c) {
            f.c cVar = (f.c) renderState;
            String f10 = cVar.f();
            if (f10 != null) {
                context.a(f10, new h(context, this, f10, null));
            }
            d.b bVar3 = new d.b(this.f40837a, renderProps.u(), renderProps.t(), renderProps.d(), renderProps.y(), cVar.g(), this.f40847k.b(), new Function0() { // from class: oo.o2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit k12;
                    k12 = r2.k1(r2.this, context);
                    return k12;
                }
            }, new Function0() { // from class: oo.p2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit l12;
                    l12 = r2.l1(r2.this, context);
                    return l12;
                }
            }, new Function0() { // from class: oo.q2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit m12;
                    m12 = r2.m1(r2.this, context);
                    return m12;
                }
            }, new Function0() { // from class: oo.z
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit n12;
                    n12 = r2.n1(r2.this, context);
                    return n12;
                }
            }, new Function1() { // from class: oo.b0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit o12;
                    o12 = r2.o1((d.b) obj);
                    return o12;
                }
            }, new Function0() { // from class: oo.c0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit p12;
                    p12 = r2.p1();
                    return p12;
                }
            }, new Function0() { // from class: oo.d0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit q12;
                    q12 = r2.q1(r2.this, context);
                    return q12;
                }
            }, new Function0() { // from class: oo.e0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit r12;
                    r12 = r2.r1(r2.this, context);
                    return r12;
                }
            }, cVar.o(), cVar.g().size() < renderProps.e(), false, cVar.l(), new Function0() { // from class: oo.f0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit s12;
                    s12 = r2.s1(r2.this, context);
                    return s12;
                }
            }, renderProps.x());
            boolean z12 = cVar.e() == f.a.f40925e;
            rp.d0 d0Var3 = rp.d0.f47574d;
            String s12 = renderProps.s();
            if (s12 == null) {
                s12 = "";
            }
            String r12 = renderProps.r();
            if (r12 == null) {
                r12 = this.f40838b.getString(tp.e.f49785c);
                Intrinsics.checkNotNullExpressionValue(r12, "getString(...)");
            }
            Context context4 = this.f40838b;
            String string3 = context4.getString(tp.e.f49784b, bq.f.b(context4));
            Intrinsics.checkNotNullExpressionValue(string3, "getString(...)");
            op.c e11 = rp.l1.e(bVar3, context, z12, d0Var3, false, s12, r12, string3, renderProps.q(), renderProps.p(), null, null, null, this.f40839c, renderProps.x(), null, new Function1() { // from class: oo.g0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r t12;
                    t12 = r2.t1(r2.this, renderState, (c1.a) obj);
                    return t12;
                }
            }, 19976, null);
            if (cVar.p()) {
                return op.d.a(nq.m.f38354a.j(nq.c.a(renderProps.l().b()), B0(renderProps.l().b(), context), new Function0() { // from class: oo.h0
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit v12;
                        v12 = r2.v1(r2.this, context);
                        return v12;
                    }
                }, renderProps.l().b().a()), e11, "document_upload_screen");
            }
            return new op.c(e11, CollectionsKt.l(), "document_upload_screen");
        } else if (renderState instanceof f.e) {
            en.w.l(context, this.f40846j.a(renderProps.v(), renderProps.j(), renderProps.i(), renderProps.h(), ((f.e) renderState).g()), Reflection.typeOf(com.withpersona.sdk2.inquiry.document.network.d.class), "", new Function1() { // from class: oo.i0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    en.r w12;
                    w12 = r2.w1(r2.this, (d.b) obj);
                    return w12;
                }
            });
            jq.b.d(this.f40847k, false, false, false, 4, null);
            return new d.a(renderProps.o(), renderProps.m(), this.f40847k.b(), new Function0() { // from class: oo.k0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit z13;
                    z13 = r2.z1(r2.this, context);
                    return z13;
                }
            }, new Function0() { // from class: oo.l0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit A1;
                    A1 = r2.A1(r2.this, context);
                    return A1;
                }
            }, renderProps.x(), renderProps.a().getPendingPage(), renderProps.n());
        } else {
            throw new as.p();
        }
    }

    @Override // en.k
    /* renamed from: b2 */
    public en.i g(f state) {
        Intrinsics.checkNotNullParameter(state, "state");
        return gn.s.a(state);
    }
}
