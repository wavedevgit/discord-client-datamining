package jo;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.LayerDrawable;
import android.graphics.drawable.RippleDrawable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewbinding.ViewBinding;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t0 extends RecyclerView.Adapter {

    /* renamed from: a  reason: collision with root package name */
    private final List f30662a;

    /* renamed from: b  reason: collision with root package name */
    private final StepStyles.GovernmentIdStepStyle f30663b;

    /* renamed from: c  reason: collision with root package name */
    private final NextStep.GovernmentId.AssetConfig.SelectPage f30664c;

    /* renamed from: d  reason: collision with root package name */
    private final Function1 f30665d;

    /* renamed from: e  reason: collision with root package name */
    private final HashMap f30666e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f30667f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f30668g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f30669a;

        static {
            int[] iArr = new int[g4.values().length];
            try {
                iArr[g4.f30305d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[g4.f30306e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[g4.f30307i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[g4.f30308o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f30669a = iArr;
        }
    }

    public t0(Context context, List data, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, NextStep.GovernmentId.AssetConfig.SelectPage selectPage, Function1 onClick) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(onClick, "onClick");
        this.f30662a = data;
        this.f30663b = governmentIdStepStyle;
        this.f30664c = selectPage;
        this.f30665d = onClick;
        this.f30666e = new HashMap();
        this.f30667f = !rp.s.b(context, jp.a.f30764d, null, false, false, 14, null);
        this.f30668g = true;
    }

    private final void b(no.e eVar) {
        Double governmentIdSelectOptionMinRowHeight;
        Integer backgroundColorValue;
        Integer chevronColor;
        TextBasedComponentStyle governmentIdVerticalOptionTextStyle;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f30663b;
        if (governmentIdStepStyle != null && (governmentIdVerticalOptionTextStyle = governmentIdStepStyle.getGovernmentIdVerticalOptionTextStyle()) != null) {
            TextView label = eVar.f41006e;
            Intrinsics.checkNotNullExpressionValue(label, "label");
            kq.f0.n(label, governmentIdVerticalOptionTextStyle, null, 2, null);
        }
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle2 = this.f30663b;
        if (governmentIdStepStyle2 != null && (chevronColor = governmentIdStepStyle2.getChevronColor()) != null) {
            eVar.f41003b.setColorFilter(chevronColor.intValue());
        }
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle3 = this.f30663b;
        if (governmentIdStepStyle3 != null && (backgroundColorValue = governmentIdStepStyle3.getBackgroundColorValue()) != null) {
            int intValue = backgroundColorValue.intValue();
            Integer activeOptionBackgroundColorValue = this.f30663b.getActiveOptionBackgroundColorValue();
            if (activeOptionBackgroundColorValue != null) {
                eVar.getRoot().setBackground(new RippleDrawable(c(activeOptionBackgroundColorValue.intValue()), new ColorDrawable(intValue), null));
            }
        }
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle4 = this.f30663b;
        if (governmentIdStepStyle4 != null && (governmentIdSelectOptionMinRowHeight = governmentIdStepStyle4.getGovernmentIdSelectOptionMinRowHeight()) != null) {
            eVar.f41007f.setMinHeight((int) rp.h.a(governmentIdSelectOptionMinRowHeight.doubleValue()));
        }
    }

    private final ColorStateList c(int i10) {
        return new ColorStateList(new int[][]{new int[0]}, new int[]{i10});
    }

    private final Drawable d(Context context, Integer num, Integer num2, Drawable drawable) {
        Drawable mutate;
        ArrayList arrayList = new ArrayList();
        if (num != null) {
            drawable.mutate().setTint(num.intValue());
        }
        Drawable b10 = g.a.b(context, l4.f30359e);
        if (num2 != null && b10 != null && (mutate = b10.mutate()) != null) {
            mutate.setTint(num2.intValue());
        }
        if (b10 != null) {
            arrayList.add(b10);
        }
        arrayList.add(drawable);
        return new LayerDrawable((Drawable[]) arrayList.toArray(new Drawable[0]));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(t0 t0Var, b0 b0Var, View view) {
        t0Var.f30665d.invoke(b0Var.b());
    }

    private final void h(no.e eVar, Drawable drawable) {
        Integer num;
        Integer governmentIdIconFillColor;
        Integer governmentIdIconStrokeColor;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f30663b;
        Integer num2 = null;
        if (governmentIdStepStyle != null && (governmentIdIconStrokeColor = governmentIdStepStyle.getGovernmentIdIconStrokeColor()) != null) {
            num = Integer.valueOf(governmentIdIconStrokeColor.intValue());
        } else {
            num = null;
        }
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle2 = this.f30663b;
        if (governmentIdStepStyle2 != null && (governmentIdIconFillColor = governmentIdStepStyle2.getGovernmentIdIconFillColor()) != null) {
            num2 = Integer.valueOf(governmentIdIconFillColor.intValue());
        }
        Context context = eVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable mutate = d(context, num, num2, drawable).mutate();
        Intrinsics.checkNotNullExpressionValue(mutate, "mutate(...)");
        eVar.f41004c.setImageDrawable(mutate);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    /* renamed from: f */
    public rp.b0 onCreateViewHolder(ViewGroup parent, int i10) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        no.e c10 = no.e.c(LayoutInflater.from(parent.getContext()), parent, false);
        Intrinsics.checkNotNullExpressionValue(c10, "inflate(...)");
        rp.b0 b0Var = new rp.b0(c10);
        ViewBinding binding = b0Var.getBinding();
        Intrinsics.checkNotNullExpressionValue(binding, "<get-binding>(...)");
        b((no.e) binding);
        return b0Var;
    }

    public final void g(boolean z10) {
        if (this.f30668g == z10) {
            return;
        }
        this.f30668g = z10;
        notifyDataSetChanged();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.f30662a.size();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int i10) {
        RemoteImage iconPassport;
        int i11;
        Intrinsics.checkNotNullParameter(holder, "holder");
        final b0 b0Var = (b0) this.f30662a.get(i10);
        no.e eVar = (no.e) rp.c0.a(holder);
        eVar.f41006e.setText(b0Var.getName());
        g4 a10 = b0Var.a();
        int[] iArr = a.f30669a;
        int i12 = iArr[a10.ordinal()];
        View view = null;
        if (i12 != 1) {
            if (i12 != 2) {
                if (i12 != 3) {
                    if (i12 == 4) {
                        NextStep.GovernmentId.AssetConfig.SelectPage selectPage = this.f30664c;
                        if (selectPage == null || (iconPassport = selectPage.getIconNationalId()) == null) {
                            NextStep.GovernmentId.AssetConfig.SelectPage selectPage2 = this.f30664c;
                            if (selectPage2 != null) {
                                iconPassport = selectPage2.getIconGovernmentId();
                            }
                            iconPassport = null;
                        }
                    } else {
                        throw new qr.p();
                    }
                } else {
                    NextStep.GovernmentId.AssetConfig.SelectPage selectPage3 = this.f30664c;
                    if (selectPage3 != null) {
                        iconPassport = selectPage3.getIconDriversLicense();
                    }
                    iconPassport = null;
                }
            } else {
                NextStep.GovernmentId.AssetConfig.SelectPage selectPage4 = this.f30664c;
                if (selectPage4 != null) {
                    iconPassport = selectPage4.getIconGovernmentId();
                }
                iconPassport = null;
            }
        } else {
            NextStep.GovernmentId.AssetConfig.SelectPage selectPage5 = this.f30664c;
            if (selectPage5 != null) {
                iconPassport = selectPage5.getIconPassport();
            }
            iconPassport = null;
        }
        Object tag = eVar.f41005d.getTag(m4.f30390h0);
        if (tag instanceof View) {
            view = (View) tag;
        }
        if (view != null) {
            eVar.f41005d.removeView(view);
        }
        if (!this.f30667f) {
            eVar.f41005d.setVisibility(8);
            TextView label = eVar.f41006e;
            Intrinsics.checkNotNullExpressionValue(label, "label");
            label.setPaddingRelative(0, label.getPaddingTop(), label.getPaddingEnd(), label.getPaddingBottom());
        } else if (iconPassport != null) {
            ConstraintLayout iconContainer = eVar.f41005d;
            Intrinsics.checkNotNullExpressionValue(iconContainer, "iconContainer");
            eVar.f41005d.setTag(m4.f30390h0, mq.b.b(iconPassport, iconContainer, true));
            eVar.f41004c.setVisibility(8);
            TextView label2 = eVar.f41006e;
            Intrinsics.checkNotNullExpressionValue(label2, "label");
            label2.setPaddingRelative((int) rp.h.a(8.0d), label2.getPaddingTop(), label2.getPaddingEnd(), label2.getPaddingBottom());
        } else {
            eVar.f41004c.setVisibility(0);
            if (this.f30666e.get(Integer.valueOf(i10)) != null) {
                eVar.f41004c.setImageDrawable((Drawable) this.f30666e.get(Integer.valueOf(i10)));
            } else {
                int i13 = iArr[b0Var.a().ordinal()];
                if (i13 != 1) {
                    if (i13 != 2) {
                        if (i13 != 3) {
                            if (i13 == 4) {
                                i11 = l4.f30363i;
                            } else {
                                throw new qr.p();
                            }
                        } else {
                            i11 = l4.f30362h;
                        }
                    } else {
                        i11 = l4.f30358d;
                    }
                } else {
                    i11 = l4.f30365k;
                }
                Drawable b10 = g.a.b(eVar.getRoot().getContext(), i11);
                if (b10 != null) {
                    h(eVar, b10);
                    this.f30666e.put(Integer.valueOf(i10), eVar.f41004c.getDrawable());
                }
            }
            TextView label3 = eVar.f41006e;
            Intrinsics.checkNotNullExpressionValue(label3, "label");
            label3.setPaddingRelative((int) rp.h.a(8.0d), label3.getPaddingTop(), label3.getPaddingEnd(), label3.getPaddingBottom());
        }
        eVar.getRoot().setOnClickListener(new View.OnClickListener() { // from class: jo.s0
            @Override // android.view.View.OnClickListener
            public final void onClick(View view2) {
                t0.e(t0.this, b0Var, view2);
            }
        });
        eVar.getRoot().setEnabled(this.f30668g);
    }
}
