package qn;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import pn.d0;
import pn.h0;
import pn.i0;
import pn.t0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: qn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0578a extends a {

        /* renamed from: a  reason: collision with root package name */
        private final pn.g f47974a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0578a(pn.g extractedBarcode) {
            super(null);
            Intrinsics.checkNotNullParameter(extractedBarcode, "extractedBarcode");
            this.f47974a = extractedBarcode;
        }

        public final pn.g a() {
            return this.f47974a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends a {

        /* renamed from: a  reason: collision with root package name */
        public static final b f47975a = new b();

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
            return 801215118;
        }

        public String toString() {
            return "Empty";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends a {

        /* renamed from: a  reason: collision with root package name */
        private final t0.c f47976a;

        /* renamed from: b  reason: collision with root package name */
        private final a f47977b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(t0.c side, a frontOrBackData) {
            super(null);
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(frontOrBackData, "frontOrBackData");
            this.f47976a = side;
            this.f47977b = frontOrBackData;
        }

        public final a a() {
            return this.f47977b;
        }

        public final t0.c b() {
            return this.f47976a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends a {

        /* renamed from: a  reason: collision with root package name */
        private final h0 f47978a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(h0 metadata) {
            super(null);
            Intrinsics.checkNotNullParameter(metadata, "metadata");
            this.f47978a = metadata;
        }

        public final h0 a() {
            return this.f47978a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends a {

        /* renamed from: a  reason: collision with root package name */
        private final i0 f47979a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(i0 imageLightCondition) {
            super(null);
            Intrinsics.checkNotNullParameter(imageLightCondition, "imageLightCondition");
            this.f47979a = imageLightCondition;
        }

        public final i0 a() {
            return this.f47979a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends a {

        /* renamed from: a  reason: collision with root package name */
        private final d0 f47980a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(d0 extractedTexts) {
            super(null);
            Intrinsics.checkNotNullParameter(extractedTexts, "extractedTexts");
            this.f47980a = extractedTexts;
        }

        public final d0 a() {
            return this.f47980a;
        }
    }

    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private a() {
    }
}
