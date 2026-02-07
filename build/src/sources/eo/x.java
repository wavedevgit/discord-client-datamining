package eo;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.MimeTypeMap;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.e;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.progressindicator.CircularProgressIndicator;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import eo.d;
import g5.h;
import java.io.File;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.IndexedValue;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x extends RecyclerView.Adapter {

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f22040a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f22041b;

    /* renamed from: c  reason: collision with root package name */
    private final StepStyles.DocumentStepStyle f22042c;

    /* renamed from: d  reason: collision with root package name */
    private final LayoutInflater f22043d;

    /* renamed from: e  reason: collision with root package name */
    private List f22044e;

    /* renamed from: f  reason: collision with root package name */
    private Function1 f22045f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: eo.x$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0304a extends a {
            public C0304a() {
                super(null);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static abstract class b extends a {

            /* renamed from: eo.x$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0305a extends b {

                /* renamed from: a  reason: collision with root package name */
                private final File f22046a;

                /* renamed from: b  reason: collision with root package name */
                private final d.a f22047b;

                /* renamed from: c  reason: collision with root package name */
                private final String f22048c;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                public C0305a(File file, d.a document, String str) {
                    super(null);
                    Intrinsics.checkNotNullParameter(file, "file");
                    Intrinsics.checkNotNullParameter(document, "document");
                    this.f22046a = file;
                    this.f22047b = document;
                    this.f22048c = str;
                }

                @Override // eo.x.a.b
                /* renamed from: b */
                public d.a a() {
                    return this.f22047b;
                }

                public final File c() {
                    return this.f22046a;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0305a)) {
                        return false;
                    }
                    C0305a c0305a = (C0305a) obj;
                    if (Intrinsics.areEqual(this.f22046a, c0305a.f22046a) && Intrinsics.areEqual(this.f22047b, c0305a.f22047b) && Intrinsics.areEqual(this.f22048c, c0305a.f22048c)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = ((this.f22046a.hashCode() * 31) + this.f22047b.hashCode()) * 31;
                    String str = this.f22048c;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    return hashCode2 + hashCode;
                }

                public String toString() {
                    File file = this.f22046a;
                    d.a aVar = this.f22047b;
                    String str = this.f22048c;
                    return "Local(file=" + file + ", document=" + aVar + ", mimeType=" + str + ")";
                }
            }

            /* renamed from: eo.x$a$b$b  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0306b extends b {

                /* renamed from: a  reason: collision with root package name */
                private final String f22049a;

                /* renamed from: b  reason: collision with root package name */
                private final String f22050b;

                /* renamed from: c  reason: collision with root package name */
                private final d.b f22051c;

                /* renamed from: d  reason: collision with root package name */
                private final String f22052d;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                public C0306b(String remoteUrl, String str, d.b document, String str2) {
                    super(null);
                    Intrinsics.checkNotNullParameter(remoteUrl, "remoteUrl");
                    Intrinsics.checkNotNullParameter(document, "document");
                    this.f22049a = remoteUrl;
                    this.f22050b = str;
                    this.f22051c = document;
                    this.f22052d = str2;
                }

                @Override // eo.x.a.b
                /* renamed from: b */
                public d.b a() {
                    return this.f22051c;
                }

                public final String c() {
                    return this.f22050b;
                }

                public String d() {
                    return this.f22052d;
                }

                public final String e() {
                    return this.f22049a;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0306b)) {
                        return false;
                    }
                    C0306b c0306b = (C0306b) obj;
                    if (Intrinsics.areEqual(this.f22049a, c0306b.f22049a) && Intrinsics.areEqual(this.f22050b, c0306b.f22050b) && Intrinsics.areEqual(this.f22051c, c0306b.f22051c) && Intrinsics.areEqual(this.f22052d, c0306b.f22052d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = this.f22049a.hashCode() * 31;
                    String str = this.f22050b;
                    int i10 = 0;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f22051c.hashCode()) * 31;
                    String str2 = this.f22052d;
                    if (str2 != null) {
                        i10 = str2.hashCode();
                    }
                    return hashCode3 + i10;
                }

                public String toString() {
                    String str = this.f22049a;
                    String str2 = this.f22050b;
                    d.b bVar = this.f22051c;
                    String str3 = this.f22052d;
                    return "Remote(remoteUrl=" + str + ", filename=" + str2 + ", document=" + bVar + ", mimeType=" + str3 + ")";
                }
            }

            public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public abstract d a();

            private b() {
                super(null);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends e.b {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ List f22053a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ List f22054b;

        b(List list, List list2) {
            this.f22053a = list;
            this.f22054b = list2;
        }

        @Override // androidx.recyclerview.widget.e.b
        public boolean areContentsTheSame(int i10, int i11) {
            boolean z10;
            a aVar = (a) this.f22053a.get(i10);
            a aVar2 = (a) this.f22054b.get(i11);
            if (areItemsTheSame(i10, i11)) {
                if (aVar instanceof a.C0304a) {
                    z10 = Intrinsics.areEqual(aVar, aVar2);
                } else if (aVar instanceof a.b) {
                    z10 = true;
                } else {
                    throw new qr.p();
                }
                if (z10) {
                    return true;
                }
                return false;
            }
            return false;
        }

        @Override // androidx.recyclerview.widget.e.b
        public boolean areItemsTheSame(int i10, int i11) {
            a aVar = (a) this.f22053a.get(i10);
            a aVar2 = (a) this.f22054b.get(i11);
            if (aVar.getClass() != aVar2.getClass()) {
                return false;
            }
            if (aVar instanceof a.C0304a) {
                return true;
            }
            if (aVar instanceof a.b.C0305a) {
                String absolutePath = ((a.b.C0305a) aVar).c().getAbsolutePath();
                Intrinsics.checkNotNull(aVar2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter.Item.DocumentItem.Local");
                return Intrinsics.areEqual(absolutePath, ((a.b.C0305a) aVar2).c().getAbsolutePath());
            } else if (aVar instanceof a.b.C0306b) {
                String e10 = ((a.b.C0306b) aVar).e();
                Intrinsics.checkNotNull(aVar2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter.Item.DocumentItem.Remote");
                return Intrinsics.areEqual(e10, ((a.b.C0306b) aVar2).e());
            } else {
                throw new qr.p();
            }
        }

        @Override // androidx.recyclerview.widget.e.b
        public int getNewListSize() {
            return this.f22054b.size();
        }

        @Override // androidx.recyclerview.widget.e.b
        public int getOldListSize() {
            return this.f22053a.size();
        }
    }

    public x(Context context, v4.h imageLoader, Function0 onClickAddButton, StepStyles.DocumentStepStyle documentStepStyle) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(imageLoader, "imageLoader");
        Intrinsics.checkNotNullParameter(onClickAddButton, "onClickAddButton");
        this.f22040a = imageLoader;
        this.f22041b = onClickAddButton;
        this.f22042c = documentStepStyle;
        this.f22043d = LayoutInflater.from(context);
        this.f22044e = CollectionsKt.l();
    }

    private final void c(fo.b bVar) {
        StepStyles.DocumentStepStyle documentStepStyle = this.f22042c;
        if (documentStepStyle == null) {
            return;
        }
        Double imagePreviewBorderRadius = documentStepStyle.getImagePreviewBorderRadius();
        if (imagePreviewBorderRadius != null) {
            bVar.f23377c.setRadius((float) rp.h.a(imagePreviewBorderRadius.doubleValue()));
        }
        Double imagePreviewBorderWidth = this.f22042c.getImagePreviewBorderWidth();
        if (imagePreviewBorderWidth != null) {
            bVar.f23377c.setStrokeWidth((int) Math.ceil(rp.h.a(imagePreviewBorderWidth.doubleValue())));
        }
        Integer imagePreviewBorderColor = this.f22042c.getImagePreviewBorderColor();
        if (imagePreviewBorderColor != null) {
            bVar.f23377c.setStrokeColor(imagePreviewBorderColor.intValue());
        }
        Integer imagePreviewMainAreaFillColor = this.f22042c.getImagePreviewMainAreaFillColor();
        if (imagePreviewMainAreaFillColor != null) {
            bVar.f23376b.setBackgroundColor(imagePreviewMainAreaFillColor.intValue());
        }
        ThemeableLottieAnimationView addButton = bVar.f23376b;
        Intrinsics.checkNotNullExpressionValue(addButton, "addButton");
        kq.g.g(addButton, this.f22042c.getImagePreviewPlusIconStrokeColor(), this.f22042c.getImagePreviewPlusIconFillColor(), null, new String[]{"#FFFFFF"}, new String[]{"#5B3FD3"}, new String[0]);
    }

    private final void d(fo.d dVar) {
        StepStyles.DocumentStepStyle documentStepStyle = this.f22042c;
        if (documentStepStyle == null) {
            return;
        }
        Integer strokeColorValue = documentStepStyle.getStrokeColorValue();
        if (strokeColorValue != null) {
            dVar.f23393f.setIndicatorColor(strokeColorValue.intValue());
        }
        Integer fillColorValue = this.f22042c.getFillColorValue();
        if (fillColorValue != null) {
            dVar.f23393f.setTrackColor(fillColorValue.intValue());
        }
        Integer imagePreviewCropAreaFillColor = this.f22042c.getImagePreviewCropAreaFillColor();
        if (imagePreviewCropAreaFillColor != null) {
            dVar.f23391d.setBackgroundColor(imagePreviewCropAreaFillColor.intValue());
        }
        Double imagePreviewBorderRadius = this.f22042c.getImagePreviewBorderRadius();
        if (imagePreviewBorderRadius != null) {
            dVar.f23389b.setRadius((float) rp.h.a(imagePreviewBorderRadius.doubleValue()));
        }
        Double imagePreviewBorderWidth = this.f22042c.getImagePreviewBorderWidth();
        if (imagePreviewBorderWidth != null) {
            dVar.f23389b.setStrokeWidth((int) Math.ceil(rp.h.a(imagePreviewBorderWidth.doubleValue())));
        }
        Integer imagePreviewBorderColor = this.f22042c.getImagePreviewBorderColor();
        if (imagePreviewBorderColor != null) {
            dVar.f23389b.setStrokeColor(imagePreviewBorderColor.intValue());
        }
        TextBasedComponentStyle imageNameStyleValue = this.f22042c.getImageNameStyleValue();
        if (imageNameStyleValue != null) {
            TextView filenameView = dVar.f23390c;
            Intrinsics.checkNotNullExpressionValue(filenameView, "filenameView");
            kq.f0.n(filenameView, imageNameStyleValue, null, 2, null);
        }
        Integer imagePreviewMainAreaFillColor = this.f22042c.getImagePreviewMainAreaFillColor();
        if (imagePreviewMainAreaFillColor != null) {
            dVar.f23392e.setBackgroundColor(imagePreviewMainAreaFillColor.intValue());
        }
        ThemeableLottieAnimationView removeButton = dVar.f23394g;
        Intrinsics.checkNotNullExpressionValue(removeButton, "removeButton");
        kq.g.g(removeButton, this.f22042c.getImagePreviewXIconStrokeColor(), this.f22042c.getImagePreviewXIconFillColor(), null, new String[]{"#6B6D82"}, new String[]{"#FFFFFF"}, new String[0]);
    }

    private final List e(boolean z10, List list) {
        a.b c0306b;
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            d dVar = (d) it.next();
            if (dVar instanceof d.a) {
                d.a aVar = (d.a) dVar;
                File file = new File(aVar.c());
                c0306b = new a.b.C0305a(file, aVar, MimeTypeMap.getSingleton().getMimeTypeFromExtension(bs.j.s(file)));
            } else if (dVar instanceof d.b) {
                d.b bVar = (d.b) dVar;
                c0306b = new a.b.C0306b(bVar.d(), bVar.c(), bVar, MimeTypeMap.getSingleton().getMimeTypeFromExtension(MimeTypeMap.getFileExtensionFromUrl(bVar.d())));
            } else {
                throw new qr.p();
            }
            arrayList.add(c0306b);
        }
        if (z10) {
            arrayList.add(new a.C0304a());
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f(x xVar, View view) {
        xVar.f22041b.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(x xVar, a aVar, View view) {
        Function1 function1 = xVar.f22045f;
        if (function1 != null) {
            function1.invoke(((a.b) aVar).a());
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.f22044e.size();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemViewType(int i10) {
        a aVar = (a) this.f22044e.get(i10);
        if (aVar instanceof a.C0304a) {
            return z2.f22090c;
        }
        if (aVar instanceof a.b) {
            return z2.f22091d;
        }
        throw new qr.p();
    }

    public final void h(Function1 function1) {
        this.f22045f = function1;
    }

    public final void i(boolean z10, List documents) {
        Intrinsics.checkNotNullParameter(documents, "documents");
        List e10 = e(z10, documents);
        List list = this.f22044e;
        e.C0066e b10 = androidx.recyclerview.widget.e.b(new b(list, e10));
        Intrinsics.checkNotNullExpressionValue(b10, "calculateDiff(...)");
        this.f22044e = e10;
        b10.c(this);
        List list2 = list;
        LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(CollectionsKt.w(list2, 10)), 16));
        for (Object obj : list2) {
            linkedHashMap.put(obj, (a) obj);
        }
        for (IndexedValue indexedValue : CollectionsKt.n1(e10)) {
            int a10 = indexedValue.a();
            a aVar = (a) indexedValue.b();
            a aVar2 = (a) linkedHashMap.get(aVar);
            if ((aVar2 instanceof a.b.C0305a) && (aVar instanceof a.b.C0305a)) {
                a.b.C0305a c0305a = (a.b.C0305a) aVar;
                if (((a.b.C0305a) aVar2).a().e() != c0305a.a().e()) {
                    if (c0305a.a().e() == 100) {
                        notifyItemChanged(a10);
                    } else {
                        notifyItemChanged(a10, Unit.f32056a);
                    }
                }
            }
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int i10) {
        int i11;
        Intrinsics.checkNotNullParameter(holder, "holder");
        final a aVar = (a) this.f22044e.get(i10);
        if (aVar instanceof a.C0304a) {
            ((fo.b) rp.c0.a(holder)).f23376b.setOnClickListener(new View.OnClickListener() { // from class: eo.v
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    x.f(x.this, view);
                }
            });
        } else if (aVar instanceof a.b) {
            fo.d dVar = (fo.d) rp.c0.a(holder);
            dVar.f23394g.setOnClickListener(new View.OnClickListener() { // from class: eo.w
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    x.g(x.this, aVar, view);
                }
            });
            ImageView imageView = dVar.f23391d;
            Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
            k5.l.a(imageView);
            dVar.f23391d.setImageDrawable(null);
            a.b bVar = (a.b) aVar;
            int i12 = 8;
            if (bVar instanceof a.b.C0305a) {
                ImageView imageView2 = dVar.f23391d;
                a.b.C0305a c0305a = (a.b.C0305a) aVar;
                if (c0305a.a().e() < 100) {
                    i11 = 4;
                } else {
                    i11 = 0;
                }
                imageView2.setVisibility(i11);
                dVar.f23394g.setVisibility(8);
                dVar.f23390c.setText(c0305a.c().getName());
                CircularProgressIndicator circularProgressIndicator = dVar.f23393f;
                if (c0305a.a().e() < 100) {
                    i12 = 0;
                }
                circularProgressIndicator.setVisibility(i12);
                dVar.f23393f.setProgress(c0305a.a().e());
            } else if (bVar instanceof a.b.C0306b) {
                dVar.f23391d.setVisibility(0);
                a.b.C0306b c0306b = (a.b.C0306b) aVar;
                if (Intrinsics.areEqual(c0306b.d(), "application/pdf")) {
                    ImageView imageView3 = dVar.f23391d;
                    Intrinsics.checkNotNullExpressionValue(imageView3, "imageView");
                    Integer valueOf = Integer.valueOf(rp.l.f49125l);
                    v4.h hVar = this.f22040a;
                    h.a r10 = new h.a(imageView3.getContext()).d(valueOf).r(imageView3);
                    r10.o(100, 100);
                    hVar.a(r10.a());
                } else {
                    ImageView imageView4 = dVar.f23391d;
                    Intrinsics.checkNotNullExpressionValue(imageView4, "imageView");
                    String e10 = c0306b.e();
                    v4.h hVar2 = this.f22040a;
                    h.a r11 = new h.a(imageView4.getContext()).d(e10).r(imageView4);
                    r11.c(true);
                    r11.b(100);
                    r11.o(500, 500);
                    hVar2.a(r11.a());
                }
                dVar.f23393f.setVisibility(8);
                dVar.f23394g.setVisibility(0);
                dVar.f23390c.setText(c0306b.c());
            } else {
                throw new qr.p();
            }
        } else {
            throw new qr.p();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int i10) {
        l5.i iVar;
        l5.i iVar2;
        Intrinsics.checkNotNullParameter(parent, "parent");
        View inflate = this.f22043d.inflate(i10, parent, false);
        if (i10 == z2.f22090c) {
            fo.b a10 = fo.b.a(inflate);
            Intrinsics.checkNotNullExpressionValue(a10, "bind(...)");
            rp.b0 b0Var = new rp.b0(a10);
            l5.b0 w10 = l5.s.w(((fo.b) b0Var.getBinding()).getRoot().getContext(), a3.f21695a);
            if (w10 != null && (iVar2 = (l5.i) w10.b()) != null) {
                ((fo.b) b0Var.getBinding()).f23376b.setComposition(iVar2);
            }
            ViewBinding binding = b0Var.getBinding();
            Intrinsics.checkNotNullExpressionValue(binding, "<get-binding>(...)");
            c((fo.b) binding);
            return b0Var;
        } else if (i10 == z2.f22091d) {
            fo.d a11 = fo.d.a(inflate);
            Intrinsics.checkNotNullExpressionValue(a11, "bind(...)");
            rp.b0 b0Var2 = new rp.b0(a11);
            l5.b0 w11 = l5.s.w(((fo.d) b0Var2.getBinding()).getRoot().getContext(), a3.f21696b);
            if (w11 != null && (iVar = (l5.i) w11.b()) != null) {
                ((fo.d) b0Var2.getBinding()).f23394g.setComposition(iVar);
            }
            ViewBinding binding2 = b0Var2.getBinding();
            Intrinsics.checkNotNullExpressionValue(binding2, "<get-binding>(...)");
            d((fo.d) binding2);
            return b0Var2;
        } else {
            throw new IllegalStateException(("Unknown view type " + i10).toString());
        }
    }
}
