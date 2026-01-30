package nn;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import mn.d0;
import mn.h0;
import mn.i0;
import mn.t0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: nn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0520a extends a {

        /* renamed from: a  reason: collision with root package name */
        private final mn.g f41996a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0520a(mn.g extractedBarcode) {
            super(null);
            Intrinsics.checkNotNullParameter(extractedBarcode, "extractedBarcode");
            this.f41996a = extractedBarcode;
        }

        public final mn.g a() {
            return this.f41996a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends a {

        /* renamed from: a  reason: collision with root package name */
        public static final b f41997a = new b();

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
        private final t0.c f41998a;

        /* renamed from: b  reason: collision with root package name */
        private final a f41999b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(t0.c side, a frontOrBackData) {
            super(null);
            Intrinsics.checkNotNullParameter(side, "side");
            Intrinsics.checkNotNullParameter(frontOrBackData, "frontOrBackData");
            this.f41998a = side;
            this.f41999b = frontOrBackData;
        }

        public final a a() {
            return this.f41999b;
        }

        public final t0.c b() {
            return this.f41998a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends a {

        /* renamed from: a  reason: collision with root package name */
        private final h0 f42000a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(h0 metadata) {
            super(null);
            Intrinsics.checkNotNullParameter(metadata, "metadata");
            this.f42000a = metadata;
        }

        public final h0 a() {
            return this.f42000a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends a {

        /* renamed from: a  reason: collision with root package name */
        private final i0 f42001a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(i0 imageLightCondition) {
            super(null);
            Intrinsics.checkNotNullParameter(imageLightCondition, "imageLightCondition");
            this.f42001a = imageLightCondition;
        }

        public final i0 a() {
            return this.f42001a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends a {

        /* renamed from: a  reason: collision with root package name */
        private final d0 f42002a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(d0 extractedTexts) {
            super(null);
            Intrinsics.checkNotNullParameter(extractedTexts, "extractedTexts");
            this.f42002a = extractedTexts;
        }

        public final d0 a() {
            return this.f42002a;
        }
    }

    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private a() {
    }
}
