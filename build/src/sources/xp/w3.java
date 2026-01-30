package xp;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.LocalImage;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class w3 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f53762a;

        static {
            int[] iArr = new int[LocalImage.Image.values().length];
            try {
                iArr[LocalImage.Image.START_HERO.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[LocalImage.Image.DOCUMENT_START_HERO.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[LocalImage.Image.ANIMATED_CHECK.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[LocalImage.Image.FAILED.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[LocalImage.Image.ID_FRONT_FAILED.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[LocalImage.Image.ID_BACK_FAILED.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[LocalImage.Image.SELFIE_FAILED.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[LocalImage.Image.DOCUMENT_FAILED.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[LocalImage.Image.PASSPORT_NFC_START_HERO.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr[LocalImage.Image.PASSPORT_NFC_SCAN_HERO.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr[LocalImage.Image.PASSPORT_NFC_SCAN_READY_HERO.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr[LocalImage.Image.PASSPORT_NFC_CHECK.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                iArr[LocalImage.Image.GOVERNMENT_ID_NFC_SCAN_BACK_CLOSED.ordinal()] = 13;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                iArr[LocalImage.Image.GOVERNMENT_ID_NFC_SCAN_FRONT_CLOSED.ordinal()] = 14;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                iArr[LocalImage.Image.GOVERNMENT_ID_NFC_SCAN_PHOTO_PAGE.ordinal()] = 15;
            } catch (NoSuchFieldError unused15) {
            }
            try {
                iArr[LocalImage.Image.GOVERNMENT_ID_NFC_SCAN_ID_CARD.ordinal()] = 16;
            } catch (NoSuchFieldError unused16) {
            }
            try {
                iArr[LocalImage.Image.GOVERNMENT_ID_NFC_SCAN_BACK_THEN_FRONT.ordinal()] = 17;
            } catch (NoSuchFieldError unused17) {
            }
            try {
                iArr[LocalImage.Image.CREATE_PERSONA_CTA_CARD_ICON.ordinal()] = 18;
            } catch (NoSuchFieldError unused18) {
            }
            try {
                iArr[LocalImage.Image.OPTION_CHECK_ICON.ordinal()] = 19;
            } catch (NoSuchFieldError unused19) {
            }
            try {
                iArr[LocalImage.Image.OPTION_CHEVRON_ICON.ordinal()] = 20;
            } catch (NoSuchFieldError unused20) {
            }
            try {
                iArr[LocalImage.Image.OPTION_FLAG_ICON.ordinal()] = 21;
            } catch (NoSuchFieldError unused21) {
            }
            try {
                iArr[LocalImage.Image.OPTION_GLOBE_ICON.ordinal()] = 22;
            } catch (NoSuchFieldError unused22) {
            }
            try {
                iArr[LocalImage.Image.OPTION_HOME_ICON.ordinal()] = 23;
            } catch (NoSuchFieldError unused23) {
            }
            try {
                iArr[LocalImage.Image.OPTION_ID_DOCUMENT_ICON.ordinal()] = 24;
            } catch (NoSuchFieldError unused24) {
            }
            try {
                iArr[LocalImage.Image.OPTION_ID_ICON.ordinal()] = 25;
            } catch (NoSuchFieldError unused25) {
            }
            try {
                iArr[LocalImage.Image.OPTION_PHONE_ICON.ordinal()] = 26;
            } catch (NoSuchFieldError unused26) {
            }
            try {
                iArr[LocalImage.Image.OPTION_USER_ICON.ordinal()] = 27;
            } catch (NoSuchFieldError unused27) {
            }
            try {
                iArr[LocalImage.Image.REUSABLE_PERSONA_LOGO.ordinal()] = 28;
            } catch (NoSuchFieldError unused28) {
            }
            f53762a = iArr;
        }
    }

    public static final ViewBinding L(k2 k2Var, m5 uiComponentHelper, int i10, int i11, final String[] originalStrokeColors, final String[] originalFillColors, final LocalImage config) {
        Intrinsics.checkNotNullParameter(k2Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(originalStrokeColors, "originalStrokeColors");
        Intrinsics.checkNotNullParameter(originalFillColors, "originalFillColors");
        Intrinsics.checkNotNullParameter(config, "config");
        if (config.getStyles() != null) {
            final lp.e c10 = lp.e.c(uiComponentHelper.b());
            c10.f37437b.setAnimation(i10);
            uiComponentHelper.d(new Function0() { // from class: xp.n3
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit M;
                    M = w3.M(lp.e.this, config, originalStrokeColors, originalFillColors);
                    return M;
                }
            });
            Intrinsics.checkNotNull(c10);
            return c10;
        }
        final int dimension = (int) uiComponentHelper.a().getResources().getDimension(bp.c.f7636e);
        final lp.f c11 = lp.f.c(uiComponentHelper.b());
        c11.f37439b.setImageResource(i11);
        uiComponentHelper.d(new Function0() { // from class: xp.o3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit N;
                N = w3.N(lp.f.this, dimension);
                return N;
            }
        });
        Intrinsics.checkNotNull(c11);
        return c11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M(lp.e eVar, LocalImage localImage, String[] strArr, String[] strArr2) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), strArr, strArr2, new String[0]);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N(lp.f fVar, int i10) {
        ImageView imageView = fVar.f37439b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33298a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static final View O(k2 k2Var, m5 uiComponentHelper, final LocalImage config) {
        lp.e eVar;
        final lp.f c10;
        Intrinsics.checkNotNullParameter(k2Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        Context a10 = uiComponentHelper.a();
        final int dimension = (int) a10.getResources().getDimension(bp.c.f7632a);
        final int dimension2 = (int) a10.getResources().getDimension(bp.c.f7635d);
        LocalImage.Attributes attributes = config.getAttributes();
        LocalImage.Image imageKey = attributes != null ? attributes.getImageKey() : null;
        switch (imageKey == null ? -1 : a.f53762a[imageKey.ordinal()]) {
            case -1:
                eVar = null;
                break;
            case 0:
            default:
                throw new ir.p();
            case 1:
                if (config.getStyles() != null) {
                    final lp.e c11 = lp.e.c(uiComponentHelper.b());
                    c11.f37437b.setAnimation(jp.o.f32372k);
                    uiComponentHelper.d(new Function0() { // from class: xp.l2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit P;
                            P = w3.P(lp.e.this, config);
                            return P;
                        }
                    });
                    Intrinsics.checkNotNull(c11);
                    eVar = c11;
                    break;
                } else {
                    c10 = lp.f.c(uiComponentHelper.b());
                    c10.f37439b.setImageResource(jp.l.f32337p);
                    uiComponentHelper.d(new Function0() { // from class: xp.n2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit c02;
                            c02 = w3.c0(lp.f.this, dimension);
                            return c02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 2:
                if (config.getStyles() != null) {
                    final lp.e c12 = lp.e.c(uiComponentHelper.b());
                    c12.f37437b.setAnimation(jp.o.f32363b);
                    uiComponentHelper.d(new Function0() { // from class: xp.z2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit n02;
                            n02 = w3.n0(lp.e.this, config);
                            return n02;
                        }
                    });
                    Intrinsics.checkNotNull(c12);
                    eVar = c12;
                    break;
                } else {
                    c10 = lp.f.c(uiComponentHelper.b());
                    c10.f37439b.setImageResource(jp.l.f32332k);
                    uiComponentHelper.d(new Function0() { // from class: xp.f3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit x02;
                            x02 = w3.x0(lp.f.this, dimension);
                            return x02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 3:
                final lp.e c13 = lp.e.c(uiComponentHelper.b());
                c13.f37437b.setAnimation(jp.o.f32373l);
                uiComponentHelper.d(new Function0() { // from class: xp.g3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit Q;
                        Q = w3.Q(lp.e.this);
                        return Q;
                    }
                });
                c13.f37437b.j(new l5.z() { // from class: xp.i3
                    @Override // l5.z
                    public final void a(l5.i iVar) {
                        w3.R(lp.e.this, iVar);
                    }
                });
                eVar = c13;
                break;
            case 4:
                if (config.getStyles() != null) {
                    final lp.e c14 = lp.e.c(uiComponentHelper.b());
                    c14.f37437b.setAnimation(jp.o.f32371j);
                    uiComponentHelper.d(new Function0() { // from class: xp.j3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit S;
                            S = w3.S(lp.e.this, config);
                            return S;
                        }
                    });
                    Intrinsics.checkNotNull(c14);
                    eVar = c14;
                    break;
                } else {
                    final lp.f c15 = lp.f.c(uiComponentHelper.b());
                    c15.f37439b.setImageResource(jp.l.f32336o);
                    uiComponentHelper.d(new Function0() { // from class: xp.k3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit T;
                            T = w3.T(lp.f.this, dimension2);
                            return T;
                        }
                    });
                    Intrinsics.checkNotNull(c15);
                    eVar = c15;
                    break;
                }
            case 5:
                if (config.getStyles() != null) {
                    final lp.e c16 = lp.e.c(uiComponentHelper.b());
                    c16.f37437b.setAnimation(jp.o.f32370i);
                    uiComponentHelper.d(new Function0() { // from class: xp.l3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit U;
                            U = w3.U(lp.e.this, config);
                            return U;
                        }
                    });
                    Intrinsics.checkNotNull(c16);
                    eVar = c16;
                    break;
                } else {
                    final lp.f c17 = lp.f.c(uiComponentHelper.b());
                    c17.f37439b.setImageResource(jp.l.f32335n);
                    uiComponentHelper.d(new Function0() { // from class: xp.m3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit V;
                            V = w3.V(lp.f.this, dimension2);
                            return V;
                        }
                    });
                    Intrinsics.checkNotNull(c17);
                    eVar = c17;
                    break;
                }
            case 6:
                if (config.getStyles() != null) {
                    final lp.e c18 = lp.e.c(uiComponentHelper.b());
                    c18.f37437b.setAnimation(jp.o.f32369h);
                    uiComponentHelper.d(new Function0() { // from class: xp.w2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit W;
                            W = w3.W(lp.e.this, config);
                            return W;
                        }
                    });
                    Intrinsics.checkNotNull(c18);
                    eVar = c18;
                    break;
                } else {
                    final lp.f c19 = lp.f.c(uiComponentHelper.b());
                    c19.f37439b.setImageResource(jp.l.f32334m);
                    uiComponentHelper.d(new Function0() { // from class: xp.h3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit X;
                            X = w3.X(lp.f.this, dimension2);
                            return X;
                        }
                    });
                    Intrinsics.checkNotNull(c19);
                    eVar = c19;
                    break;
                }
            case 7:
                if (config.getStyles() != null) {
                    final lp.e c20 = lp.e.c(uiComponentHelper.b());
                    c20.f37437b.setAnimation(jp.o.f32387z);
                    uiComponentHelper.d(new Function0() { // from class: xp.p3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit Y;
                            Y = w3.Y(lp.e.this, config);
                            return Y;
                        }
                    });
                    Intrinsics.checkNotNull(c20);
                    eVar = c20;
                    break;
                } else {
                    final lp.f c21 = lp.f.c(uiComponentHelper.b());
                    c21.f37439b.setImageResource(jp.l.f32339r);
                    uiComponentHelper.d(new Function0() { // from class: xp.q3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit Z;
                            Z = w3.Z(lp.f.this, dimension2);
                            return Z;
                        }
                    });
                    Intrinsics.checkNotNull(c21);
                    eVar = c21;
                    break;
                }
            case 8:
                if (config.getStyles() != null) {
                    final lp.e c22 = lp.e.c(uiComponentHelper.b());
                    c22.f37437b.setAnimation(jp.o.f32362a);
                    uiComponentHelper.d(new Function0() { // from class: xp.r3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit a02;
                            a02 = w3.a0(lp.e.this, config);
                            return a02;
                        }
                    });
                    Intrinsics.checkNotNull(c22);
                    eVar = c22;
                    break;
                } else {
                    c10 = lp.f.c(uiComponentHelper.b());
                    c10.f37439b.setImageResource(jp.l.f32331j);
                    uiComponentHelper.d(new Function0() { // from class: xp.s3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit b02;
                            b02 = w3.b0(lp.f.this, dimension);
                            return b02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 9:
                if (config.getStyles() != null) {
                    final lp.e c23 = lp.e.c(uiComponentHelper.b());
                    c23.f37437b.setAnimation(jp.o.f32386y);
                    uiComponentHelper.d(new Function0() { // from class: xp.t3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit d02;
                            d02 = w3.d0(lp.e.this, config);
                            return d02;
                        }
                    });
                    Intrinsics.checkNotNull(c23);
                    eVar = c23;
                    break;
                } else {
                    c10 = lp.f.c(uiComponentHelper.b());
                    c10.f37439b.setImageResource(jp.l.f32338q);
                    uiComponentHelper.d(new Function0() { // from class: xp.u3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit e02;
                            e02 = w3.e0(lp.f.this, dimension);
                            return e02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 10:
                final lp.e c24 = lp.e.c(uiComponentHelper.b());
                c24.f37437b.setAnimation(jp.o.f32384w);
                c24.f37437b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: xp.v3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit f02;
                            f02 = w3.f0(lp.e.this, config);
                            return f02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView = c24.f37437b;
                    Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
                    cq.g.g(lottieView, Integer.valueOf(jp.s.d(a10, yg.b.f54368m, null, false, 6, null)), Integer.valueOf(jp.s.d(a10, yg.b.f54369n, null, false, 6, null)), null, new String[]{"#190052"}, new String[]{"#F1EBFF", "#8552FF"}, new String[]{"#FFFFFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: xp.m2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit g02;
                        g02 = w3.g0(lp.e.this);
                        return g02;
                    }
                });
                eVar = c24;
                break;
            case 11:
                final lp.e c25 = lp.e.c(uiComponentHelper.b());
                c25.f37437b.setAnimation(jp.o.f32385x);
                uiComponentHelper.d(new Function0() { // from class: xp.o2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit h02;
                        h02 = w3.h0(lp.e.this);
                        return h02;
                    }
                });
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: xp.p2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit i02;
                            i02 = w3.i0(lp.e.this, config);
                            return i02;
                        }
                    });
                    eVar = c25;
                    break;
                } else {
                    ThemeableLottieAnimationView lottieView2 = c25.f37437b;
                    Intrinsics.checkNotNullExpressionValue(lottieView2, "lottieView");
                    cq.g.g(lottieView2, Integer.valueOf(jp.s.d(a10, yg.b.f54368m, null, false, 6, null)), Integer.valueOf(jp.s.d(a10, yg.b.f54369n, null, false, 6, null)), null, new String[]{"#02214F", "#190051"}, new String[]{"#E5E5EA"}, new String[0]);
                    eVar = c25;
                    break;
                }
            case 12:
                final lp.e c26 = lp.e.c(uiComponentHelper.b());
                c26.f37437b.setAnimation(jp.o.f32383v);
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: xp.q2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit j02;
                            j02 = w3.j0(lp.e.this, config);
                            return j02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView3 = c26.f37437b;
                    Intrinsics.checkNotNullExpressionValue(lottieView3, "lottieView");
                    cq.g.g(lottieView3, Integer.valueOf(jp.s.d(a10, yg.b.f54368m, null, false, 6, null)), null, null, new String[]{"#280087"}, new String[0], new String[0]);
                }
                uiComponentHelper.d(new Function0() { // from class: xp.r2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit k02;
                        k02 = w3.k0(lp.e.this);
                        return k02;
                    }
                });
                eVar = c26;
                break;
            case 13:
                final lp.e c27 = lp.e.c(uiComponentHelper.b());
                c27.f37437b.setAnimation(jp.o.f32364c);
                c27.f37437b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: xp.s2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit l02;
                            l02 = w3.l0(lp.e.this, config);
                            return l02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView4 = c27.f37437b;
                    Intrinsics.checkNotNullExpressionValue(lottieView4, "lottieView");
                    cq.g.g(lottieView4, Integer.valueOf(jp.s.d(a10, yg.b.f54368m, null, false, 6, null)), Integer.valueOf(jp.s.d(a10, yg.b.f54369n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: xp.t2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit m02;
                        m02 = w3.m0(lp.e.this);
                        return m02;
                    }
                });
                eVar = c27;
                break;
            case 14:
                final lp.e c28 = lp.e.c(uiComponentHelper.b());
                c28.f37437b.setAnimation(jp.o.f32366e);
                c28.f37437b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: xp.u2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit o02;
                            o02 = w3.o0(lp.e.this, config);
                            return o02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView5 = c28.f37437b;
                    Intrinsics.checkNotNullExpressionValue(lottieView5, "lottieView");
                    cq.g.g(lottieView5, Integer.valueOf(jp.s.d(a10, yg.b.f54368m, null, false, 6, null)), Integer.valueOf(jp.s.d(a10, yg.b.f54369n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: xp.v2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit p02;
                        p02 = w3.p0(lp.e.this);
                        return p02;
                    }
                });
                eVar = c28;
                break;
            case 15:
                final lp.e c29 = lp.e.c(uiComponentHelper.b());
                c29.f37437b.setAnimation(jp.o.f32368g);
                c29.f37437b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: xp.x2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit q02;
                            q02 = w3.q0(lp.e.this, config);
                            return q02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView6 = c29.f37437b;
                    Intrinsics.checkNotNullExpressionValue(lottieView6, "lottieView");
                    cq.g.g(lottieView6, Integer.valueOf(jp.s.d(a10, yg.b.f54368m, null, false, 6, null)), Integer.valueOf(jp.s.d(a10, yg.b.f54369n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: xp.y2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit r02;
                        r02 = w3.r0(lp.e.this);
                        return r02;
                    }
                });
                eVar = c29;
                break;
            case 16:
                final lp.e c30 = lp.e.c(uiComponentHelper.b());
                c30.f37437b.setAnimation(jp.o.f32367f);
                c30.f37437b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: xp.a3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit s02;
                            s02 = w3.s0(lp.e.this, config);
                            return s02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView7 = c30.f37437b;
                    Intrinsics.checkNotNullExpressionValue(lottieView7, "lottieView");
                    cq.g.g(lottieView7, Integer.valueOf(jp.s.d(a10, yg.b.f54368m, null, false, 6, null)), Integer.valueOf(jp.s.d(a10, yg.b.f54369n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: xp.b3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit t02;
                        t02 = w3.t0(lp.e.this);
                        return t02;
                    }
                });
                eVar = c30;
                break;
            case 17:
                final lp.e c31 = lp.e.c(uiComponentHelper.b());
                c31.f37437b.setAnimation(jp.o.f32365d);
                c31.f37437b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: xp.c3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit u02;
                            u02 = w3.u0(lp.e.this, config);
                            return u02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView8 = c31.f37437b;
                    Intrinsics.checkNotNullExpressionValue(lottieView8, "lottieView");
                    cq.g.g(lottieView8, Integer.valueOf(jp.s.d(a10, yg.b.f54368m, null, false, 6, null)), Integer.valueOf(jp.s.d(a10, yg.b.f54369n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: xp.d3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit v02;
                        v02 = w3.v0(lp.e.this);
                        return v02;
                    }
                });
                eVar = c31;
                break;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                final lp.e c32 = lp.e.c(uiComponentHelper.b());
                c32.f37437b.setImageResource(vp.d.f51796a);
                if (config.getStyles() != null) {
                    ThemeableLottieAnimationView lottieView9 = c32.f37437b;
                    Intrinsics.checkNotNullExpressionValue(lottieView9, "lottieView");
                    cq.g.c(lottieView9, config.getStyles(), new String[0], new String[0], new String[0]);
                    eVar = c32;
                    break;
                } else {
                    uiComponentHelper.d(new Function0() { // from class: xp.e3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit w02;
                            w02 = w3.w0(lp.e.this);
                            return w02;
                        }
                    });
                    eVar = c32;
                    break;
                }
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                eVar = L(k2Var, uiComponentHelper, jp.o.f32374m, jp.l.f32322a, new String[0], new String[0], config);
                break;
            case 20:
                eVar = L(k2Var, uiComponentHelper, jp.o.f32375n, jp.l.f32323b, new String[]{"#000000"}, new String[0], config);
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                eVar = L(k2Var, uiComponentHelper, jp.o.f32376o, jp.l.f32324c, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                eVar = L(k2Var, uiComponentHelper, jp.o.f32377p, jp.l.f32325d, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case 23:
                eVar = L(k2Var, uiComponentHelper, jp.o.f32378q, jp.l.f32326e, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                eVar = L(k2Var, uiComponentHelper, jp.o.f32379r, jp.l.f32327f, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                eVar = L(k2Var, uiComponentHelper, jp.o.f32380s, jp.l.f32328g, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                eVar = L(k2Var, uiComponentHelper, jp.o.f32381t, jp.l.f32329h, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case 27:
                eVar = L(k2Var, uiComponentHelper, jp.o.f32382u, jp.l.f32330i, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case 28:
                lp.e c33 = lp.e.c(uiComponentHelper.b());
                c33.f37437b.setImageResource(vp.d.f51800e);
                eVar = c33;
                if (config.getStyles() != null) {
                    ThemeableLottieAnimationView lottieView10 = c33.f37437b;
                    Intrinsics.checkNotNullExpressionValue(lottieView10, "lottieView");
                    cq.g.c(lottieView10, config.getStyles(), new String[0], new String[0], new String[0]);
                    eVar = c33;
                    break;
                }
                break;
        }
        if (eVar != null) {
            return eVar.getRoot();
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P(lp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), new String[]{"#02214F"}, new String[]{"#AA84FF", "#F2EAFF"}, new String[]{"#FFFFFF"});
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q(lp.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ((ConstraintLayout.LayoutParams) layoutParams).V = 0.5f;
            }
            lottieView.setLayoutParams(layoutParams);
            return Unit.f33298a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void R(lp.e eVar, l5.i iVar) {
        eVar.f37437b.playAnimation();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S(lp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), new String[]{"#02214F"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T(lp.f fVar, int i10) {
        ImageView imageView = fVar.f37439b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33298a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U(lp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(lp.f fVar, int i10) {
        ImageView imageView = fVar.f37439b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33298a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W(lp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X(lp.f fVar, int i10) {
        ImageView imageView = fVar.f37439b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33298a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y(lp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(lp.f fVar, int i10) {
        ImageView imageView = fVar.f37439b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33298a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(lp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), new String[]{"#4C4293"}, new String[]{"#B5B5CC"}, new String[0]);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b0(lp.f fVar, int i10) {
        ImageView imageView = fVar.f37439b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33298a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(lp.f fVar, int i10) {
        ImageView imageView = fVar.f37439b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33298a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(lp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051", "#02214F"}, new String[]{"#AA84FF"}, new String[]{"#AA84FF"});
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e0(lp.f fVar, int i10) {
        ImageView imageView = fVar.f37439b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33298a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f0(lp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), new String[]{"#190052"}, new String[]{"#F1EBFF", "#8552FF"}, new String[]{"#FFFFFF"});
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g0(lp.e eVar) {
        eVar.f37437b.setRepeatMode(1);
        eVar.f37437b.setRepeatCount(-1);
        eVar.f37437b.playAnimation();
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h0(lp.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ((ConstraintLayout.LayoutParams) layoutParams).V = 0.5f;
            }
            lottieView.setLayoutParams(layoutParams);
            return Unit.f33298a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i0(lp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), new String[]{"#02214F", "#190051"}, new String[]{"#E5E5EA"}, new String[0]);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(lp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087"}, new String[0], new String[0]);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(lp.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ((ConstraintLayout.LayoutParams) layoutParams).V = 0.5f;
            }
            lottieView.setLayoutParams(layoutParams);
            return Unit.f33298a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(lp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m0(lp.e eVar) {
        eVar.f37437b.setRepeatMode(1);
        eVar.f37437b.setRepeatCount(-1);
        eVar.f37437b.playAnimation();
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(lp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF", "#F2EAFF"}, new String[]{"#FFFFFF"});
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(lp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(lp.e eVar) {
        eVar.f37437b.setRepeatMode(1);
        eVar.f37437b.setRepeatCount(-1);
        eVar.f37437b.playAnimation();
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0(lp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(lp.e eVar) {
        eVar.f37437b.setRepeatMode(1);
        eVar.f37437b.setRepeatCount(-1);
        eVar.f37437b.playAnimation();
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s0(lp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t0(lp.e eVar) {
        eVar.f37437b.setRepeatMode(1);
        eVar.f37437b.setRepeatCount(-1);
        eVar.f37437b.playAnimation();
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(lp.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        cq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v0(lp.e eVar) {
        eVar.f37437b.setRepeatMode(1);
        eVar.f37437b.setRepeatCount(-1);
        eVar.f37437b.playAnimation();
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(lp.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f37437b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = (int) jp.h.a(44.0d);
            lottieView.setLayoutParams(layoutParams);
            return Unit.f33298a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(lp.f fVar, int i10) {
        ImageView imageView = fVar.f37439b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f33298a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }
}
