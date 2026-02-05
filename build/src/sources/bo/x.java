package bo;

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
import bo.d;
import com.google.android.material.progressindicator.CircularProgressIndicator;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
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
    private final v4.h f7014a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f7015b;

    /* renamed from: c  reason: collision with root package name */
    private final StepStyles.DocumentStepStyle f7016c;

    /* renamed from: d  reason: collision with root package name */
    private final LayoutInflater f7017d;

    /* renamed from: e  reason: collision with root package name */
    private List f7018e;

    /* renamed from: f  reason: collision with root package name */
    private Function1 f7019f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: bo.x$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0123a extends a {
            public C0123a() {
                super(null);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static abstract class b extends a {

            /* renamed from: bo.x$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0124a extends b {

                /* renamed from: a  reason: collision with root package name */
                private final File f7020a;

                /* renamed from: b  reason: collision with root package name */
                private final d.a f7021b;

                /* renamed from: c  reason: collision with root package name */
                private final String f7022c;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                public C0124a(File file, d.a document, String str) {
                    super(null);
                    Intrinsics.checkNotNullParameter(file, "file");
                    Intrinsics.checkNotNullParameter(document, "document");
                    this.f7020a = file;
                    this.f7021b = document;
                    this.f7022c = str;
                }

                @Override // bo.x.a.b
                /* renamed from: b */
                public d.a a() {
                    return this.f7021b;
                }

                public final File c() {
                    return this.f7020a;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0124a)) {
                        return false;
                    }
                    C0124a c0124a = (C0124a) obj;
                    if (Intrinsics.areEqual(this.f7020a, c0124a.f7020a) && Intrinsics.areEqual(this.f7021b, c0124a.f7021b) && Intrinsics.areEqual(this.f7022c, c0124a.f7022c)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = ((this.f7020a.hashCode() * 31) + this.f7021b.hashCode()) * 31;
                    String str = this.f7022c;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    return hashCode2 + hashCode;
                }

                public String toString() {
                    File file = this.f7020a;
                    d.a aVar = this.f7021b;
                    String str = this.f7022c;
                    return "Local(file=" + file + ", document=" + aVar + ", mimeType=" + str + ")";
                }
            }

            /* renamed from: bo.x$a$b$b  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0125b extends b {

                /* renamed from: a  reason: collision with root package name */
                private final String f7023a;

                /* renamed from: b  reason: collision with root package name */
                private final String f7024b;

                /* renamed from: c  reason: collision with root package name */
                private final d.b f7025c;

                /* renamed from: d  reason: collision with root package name */
                private final String f7026d;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                public C0125b(String remoteUrl, String str, d.b document, String str2) {
                    super(null);
                    Intrinsics.checkNotNullParameter(remoteUrl, "remoteUrl");
                    Intrinsics.checkNotNullParameter(document, "document");
                    this.f7023a = remoteUrl;
                    this.f7024b = str;
                    this.f7025c = document;
                    this.f7026d = str2;
                }

                @Override // bo.x.a.b
                /* renamed from: b */
                public d.b a() {
                    return this.f7025c;
                }

                public final String c() {
                    return this.f7024b;
                }

                public String d() {
                    return this.f7026d;
                }

                public final String e() {
                    return this.f7023a;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0125b)) {
                        return false;
                    }
                    C0125b c0125b = (C0125b) obj;
                    if (Intrinsics.areEqual(this.f7023a, c0125b.f7023a) && Intrinsics.areEqual(this.f7024b, c0125b.f7024b) && Intrinsics.areEqual(this.f7025c, c0125b.f7025c) && Intrinsics.areEqual(this.f7026d, c0125b.f7026d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = this.f7023a.hashCode() * 31;
                    String str = this.f7024b;
                    int i10 = 0;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f7025c.hashCode()) * 31;
                    String str2 = this.f7026d;
                    if (str2 != null) {
                        i10 = str2.hashCode();
                    }
                    return hashCode3 + i10;
                }

                public String toString() {
                    String str = this.f7023a;
                    String str2 = this.f7024b;
                    d.b bVar = this.f7025c;
                    String str3 = this.f7026d;
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
        final /* synthetic */ List f7027a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ List f7028b;

        b(List list, List list2) {
            this.f7027a = list;
            this.f7028b = list2;
        }

        @Override // androidx.recyclerview.widget.e.b
        public boolean areContentsTheSame(int i10, int i11) {
            boolean z10;
            a aVar = (a) this.f7027a.get(i10);
            a aVar2 = (a) this.f7028b.get(i11);
            if (areItemsTheSame(i10, i11)) {
                if (aVar instanceof a.C0123a) {
                    z10 = Intrinsics.areEqual(aVar, aVar2);
                } else if (aVar instanceof a.b) {
                    z10 = true;
                } else {
                    throw new or.p();
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
            a aVar = (a) this.f7027a.get(i10);
            a aVar2 = (a) this.f7028b.get(i11);
            if (aVar.getClass() != aVar2.getClass()) {
                return false;
            }
            if (aVar instanceof a.C0123a) {
                return true;
            }
            if (aVar instanceof a.b.C0124a) {
                String absolutePath = ((a.b.C0124a) aVar).c().getAbsolutePath();
                Intrinsics.checkNotNull(aVar2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter.Item.DocumentItem.Local");
                return Intrinsics.areEqual(absolutePath, ((a.b.C0124a) aVar2).c().getAbsolutePath());
            } else if (aVar instanceof a.b.C0125b) {
                String e10 = ((a.b.C0125b) aVar).e();
                Intrinsics.checkNotNull(aVar2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter.Item.DocumentItem.Remote");
                return Intrinsics.areEqual(e10, ((a.b.C0125b) aVar2).e());
            } else {
                throw new or.p();
            }
        }

        @Override // androidx.recyclerview.widget.e.b
        public int getNewListSize() {
            return this.f7028b.size();
        }

        @Override // androidx.recyclerview.widget.e.b
        public int getOldListSize() {
            return this.f7027a.size();
        }
    }

    public x(Context context, v4.h imageLoader, Function0 onClickAddButton, StepStyles.DocumentStepStyle documentStepStyle) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(imageLoader, "imageLoader");
        Intrinsics.checkNotNullParameter(onClickAddButton, "onClickAddButton");
        this.f7014a = imageLoader;
        this.f7015b = onClickAddButton;
        this.f7016c = documentStepStyle;
        this.f7017d = LayoutInflater.from(context);
        this.f7018e = CollectionsKt.l();
    }

    private final void c(co.b bVar) {
        StepStyles.DocumentStepStyle documentStepStyle = this.f7016c;
        if (documentStepStyle == null) {
            return;
        }
        Double imagePreviewBorderRadius = documentStepStyle.getImagePreviewBorderRadius();
        if (imagePreviewBorderRadius != null) {
            bVar.f7750c.setRadius((float) pp.h.a(imagePreviewBorderRadius.doubleValue()));
        }
        Double imagePreviewBorderWidth = this.f7016c.getImagePreviewBorderWidth();
        if (imagePreviewBorderWidth != null) {
            bVar.f7750c.setStrokeWidth((int) Math.ceil(pp.h.a(imagePreviewBorderWidth.doubleValue())));
        }
        Integer imagePreviewBorderColor = this.f7016c.getImagePreviewBorderColor();
        if (imagePreviewBorderColor != null) {
            bVar.f7750c.setStrokeColor(imagePreviewBorderColor.intValue());
        }
        Integer imagePreviewMainAreaFillColor = this.f7016c.getImagePreviewMainAreaFillColor();
        if (imagePreviewMainAreaFillColor != null) {
            bVar.f7749b.setBackgroundColor(imagePreviewMainAreaFillColor.intValue());
        }
        ThemeableLottieAnimationView addButton = bVar.f7749b;
        Intrinsics.checkNotNullExpressionValue(addButton, "addButton");
        iq.g.g(addButton, this.f7016c.getImagePreviewPlusIconStrokeColor(), this.f7016c.getImagePreviewPlusIconFillColor(), null, new String[]{"#FFFFFF"}, new String[]{"#5B3FD3"}, new String[0]);
    }

    private final void d(co.d dVar) {
        StepStyles.DocumentStepStyle documentStepStyle = this.f7016c;
        if (documentStepStyle == null) {
            return;
        }
        Integer strokeColorValue = documentStepStyle.getStrokeColorValue();
        if (strokeColorValue != null) {
            dVar.f7766f.setIndicatorColor(strokeColorValue.intValue());
        }
        Integer fillColorValue = this.f7016c.getFillColorValue();
        if (fillColorValue != null) {
            dVar.f7766f.setTrackColor(fillColorValue.intValue());
        }
        Integer imagePreviewCropAreaFillColor = this.f7016c.getImagePreviewCropAreaFillColor();
        if (imagePreviewCropAreaFillColor != null) {
            dVar.f7764d.setBackgroundColor(imagePreviewCropAreaFillColor.intValue());
        }
        Double imagePreviewBorderRadius = this.f7016c.getImagePreviewBorderRadius();
        if (imagePreviewBorderRadius != null) {
            dVar.f7762b.setRadius((float) pp.h.a(imagePreviewBorderRadius.doubleValue()));
        }
        Double imagePreviewBorderWidth = this.f7016c.getImagePreviewBorderWidth();
        if (imagePreviewBorderWidth != null) {
            dVar.f7762b.setStrokeWidth((int) Math.ceil(pp.h.a(imagePreviewBorderWidth.doubleValue())));
        }
        Integer imagePreviewBorderColor = this.f7016c.getImagePreviewBorderColor();
        if (imagePreviewBorderColor != null) {
            dVar.f7762b.setStrokeColor(imagePreviewBorderColor.intValue());
        }
        TextBasedComponentStyle imageNameStyleValue = this.f7016c.getImageNameStyleValue();
        if (imageNameStyleValue != null) {
            TextView filenameView = dVar.f7763c;
            Intrinsics.checkNotNullExpressionValue(filenameView, "filenameView");
            iq.f0.n(filenameView, imageNameStyleValue, null, 2, null);
        }
        Integer imagePreviewMainAreaFillColor = this.f7016c.getImagePreviewMainAreaFillColor();
        if (imagePreviewMainAreaFillColor != null) {
            dVar.f7765e.setBackgroundColor(imagePreviewMainAreaFillColor.intValue());
        }
        ThemeableLottieAnimationView removeButton = dVar.f7767g;
        Intrinsics.checkNotNullExpressionValue(removeButton, "removeButton");
        iq.g.g(removeButton, this.f7016c.getImagePreviewXIconStrokeColor(), this.f7016c.getImagePreviewXIconFillColor(), null, new String[]{"#6B6D82"}, new String[]{"#FFFFFF"}, new String[0]);
    }

    private final List e(boolean z10, List list) {
        a.b c0125b;
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            d dVar = (d) it.next();
            if (dVar instanceof d.a) {
                d.a aVar = (d.a) dVar;
                File file = new File(aVar.c());
                c0125b = new a.b.C0124a(file, aVar, MimeTypeMap.getSingleton().getMimeTypeFromExtension(zr.j.s(file)));
            } else if (dVar instanceof d.b) {
                d.b bVar = (d.b) dVar;
                c0125b = new a.b.C0125b(bVar.d(), bVar.c(), bVar, MimeTypeMap.getSingleton().getMimeTypeFromExtension(MimeTypeMap.getFileExtensionFromUrl(bVar.d())));
            } else {
                throw new or.p();
            }
            arrayList.add(c0125b);
        }
        if (z10) {
            arrayList.add(new a.C0123a());
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f(x xVar, View view) {
        xVar.f7015b.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(x xVar, a aVar, View view) {
        Function1 function1 = xVar.f7019f;
        if (function1 != null) {
            function1.invoke(((a.b) aVar).a());
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.f7018e.size();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemViewType(int i10) {
        a aVar = (a) this.f7018e.get(i10);
        if (aVar instanceof a.C0123a) {
            return z2.f7064c;
        }
        if (aVar instanceof a.b) {
            return z2.f7065d;
        }
        throw new or.p();
    }

    public final void h(Function1 function1) {
        this.f7019f = function1;
    }

    public final void i(boolean z10, List documents) {
        Intrinsics.checkNotNullParameter(documents, "documents");
        List e10 = e(z10, documents);
        List list = this.f7018e;
        e.C0068e b10 = androidx.recyclerview.widget.e.b(new b(list, e10));
        Intrinsics.checkNotNullExpressionValue(b10, "calculateDiff(...)");
        this.f7018e = e10;
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
            if ((aVar2 instanceof a.b.C0124a) && (aVar instanceof a.b.C0124a)) {
                a.b.C0124a c0124a = (a.b.C0124a) aVar;
                if (((a.b.C0124a) aVar2).a().e() != c0124a.a().e()) {
                    if (c0124a.a().e() == 100) {
                        notifyItemChanged(a10);
                    } else {
                        notifyItemChanged(a10, Unit.f31988a);
                    }
                }
            }
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int i10) {
        int i11;
        Intrinsics.checkNotNullParameter(holder, "holder");
        final a aVar = (a) this.f7018e.get(i10);
        if (aVar instanceof a.C0123a) {
            ((co.b) pp.c0.a(holder)).f7749b.setOnClickListener(new View.OnClickListener() { // from class: bo.v
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    x.f(x.this, view);
                }
            });
        } else if (aVar instanceof a.b) {
            co.d dVar = (co.d) pp.c0.a(holder);
            dVar.f7767g.setOnClickListener(new View.OnClickListener() { // from class: bo.w
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    x.g(x.this, aVar, view);
                }
            });
            ImageView imageView = dVar.f7764d;
            Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
            k5.l.a(imageView);
            dVar.f7764d.setImageDrawable(null);
            a.b bVar = (a.b) aVar;
            int i12 = 8;
            if (bVar instanceof a.b.C0124a) {
                ImageView imageView2 = dVar.f7764d;
                a.b.C0124a c0124a = (a.b.C0124a) aVar;
                if (c0124a.a().e() < 100) {
                    i11 = 4;
                } else {
                    i11 = 0;
                }
                imageView2.setVisibility(i11);
                dVar.f7767g.setVisibility(8);
                dVar.f7763c.setText(c0124a.c().getName());
                CircularProgressIndicator circularProgressIndicator = dVar.f7766f;
                if (c0124a.a().e() < 100) {
                    i12 = 0;
                }
                circularProgressIndicator.setVisibility(i12);
                dVar.f7766f.setProgress(c0124a.a().e());
            } else if (bVar instanceof a.b.C0125b) {
                dVar.f7764d.setVisibility(0);
                a.b.C0125b c0125b = (a.b.C0125b) aVar;
                if (Intrinsics.areEqual(c0125b.d(), "application/pdf")) {
                    ImageView imageView3 = dVar.f7764d;
                    Intrinsics.checkNotNullExpressionValue(imageView3, "imageView");
                    Integer valueOf = Integer.valueOf(pp.l.f46176l);
                    v4.h hVar = this.f7014a;
                    h.a r10 = new h.a(imageView3.getContext()).d(valueOf).r(imageView3);
                    r10.o(100, 100);
                    hVar.a(r10.a());
                } else {
                    ImageView imageView4 = dVar.f7764d;
                    Intrinsics.checkNotNullExpressionValue(imageView4, "imageView");
                    String e10 = c0125b.e();
                    v4.h hVar2 = this.f7014a;
                    h.a r11 = new h.a(imageView4.getContext()).d(e10).r(imageView4);
                    r11.c(true);
                    r11.b(100);
                    r11.o(500, 500);
                    hVar2.a(r11.a());
                }
                dVar.f7766f.setVisibility(8);
                dVar.f7767g.setVisibility(0);
                dVar.f7763c.setText(c0125b.c());
            } else {
                throw new or.p();
            }
        } else {
            throw new or.p();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int i10) {
        l5.i iVar;
        l5.i iVar2;
        Intrinsics.checkNotNullParameter(parent, "parent");
        View inflate = this.f7017d.inflate(i10, parent, false);
        if (i10 == z2.f7064c) {
            co.b a10 = co.b.a(inflate);
            Intrinsics.checkNotNullExpressionValue(a10, "bind(...)");
            pp.b0 b0Var = new pp.b0(a10);
            l5.b0 w10 = l5.s.w(((co.b) b0Var.getBinding()).getRoot().getContext(), a3.f6669a);
            if (w10 != null && (iVar2 = (l5.i) w10.b()) != null) {
                ((co.b) b0Var.getBinding()).f7749b.setComposition(iVar2);
            }
            ViewBinding binding = b0Var.getBinding();
            Intrinsics.checkNotNullExpressionValue(binding, "<get-binding>(...)");
            c((co.b) binding);
            return b0Var;
        } else if (i10 == z2.f7065d) {
            co.d a11 = co.d.a(inflate);
            Intrinsics.checkNotNullExpressionValue(a11, "bind(...)");
            pp.b0 b0Var2 = new pp.b0(a11);
            l5.b0 w11 = l5.s.w(((co.d) b0Var2.getBinding()).getRoot().getContext(), a3.f6670b);
            if (w11 != null && (iVar = (l5.i) w11.b()) != null) {
                ((co.d) b0Var2.getBinding()).f7767g.setComposition(iVar);
            }
            ViewBinding binding2 = b0Var2.getBinding();
            Intrinsics.checkNotNullExpressionValue(binding2, "<get-binding>(...)");
            d((co.d) binding2);
            return b0Var2;
        } else {
            throw new IllegalStateException(("Unknown view type " + i10).toString());
        }
    }
}
