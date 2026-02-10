package gq;

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
        public static final /* synthetic */ int[] f24741a;

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
            f24741a = iArr;
        }
    }

    public static final ViewBinding L(k2 k2Var, m5 uiComponentHelper, int i10, int i11, final String[] originalStrokeColors, final String[] originalFillColors, final LocalImage config) {
        Intrinsics.checkNotNullParameter(k2Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(originalStrokeColors, "originalStrokeColors");
        Intrinsics.checkNotNullParameter(originalFillColors, "originalFillColors");
        Intrinsics.checkNotNullParameter(config, "config");
        if (config.getStyles() != null) {
            final up.e c10 = up.e.c(uiComponentHelper.b());
            c10.f51757b.setAnimation(i10);
            uiComponentHelper.d(new Function0() { // from class: gq.n3
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit M;
                    M = w3.M(up.e.this, config, originalStrokeColors, originalFillColors);
                    return M;
                }
            });
            Intrinsics.checkNotNull(c10);
            return c10;
        }
        final int dimension = (int) uiComponentHelper.a().getResources().getDimension(kp.c.f34928e);
        final up.f c11 = up.f.c(uiComponentHelper.b());
        c11.f51759b.setImageResource(i11);
        uiComponentHelper.d(new Function0() { // from class: gq.o3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit N;
                N = w3.N(up.f.this, dimension);
                return N;
            }
        });
        Intrinsics.checkNotNull(c11);
        return c11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M(up.e eVar, LocalImage localImage, String[] strArr, String[] strArr2) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), strArr, strArr2, new String[0]);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N(up.f fVar, int i10) {
        ImageView imageView = fVar.f51759b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31765a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static final View O(k2 k2Var, m5 uiComponentHelper, final LocalImage config) {
        up.e eVar;
        final up.f c10;
        Intrinsics.checkNotNullParameter(k2Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        Context a10 = uiComponentHelper.a();
        final int dimension = (int) a10.getResources().getDimension(kp.c.f34924a);
        final int dimension2 = (int) a10.getResources().getDimension(kp.c.f34927d);
        LocalImage.Attributes attributes = config.getAttributes();
        LocalImage.Image imageKey = attributes != null ? attributes.getImageKey() : null;
        switch (imageKey == null ? -1 : a.f24741a[imageKey.ordinal()]) {
            case -1:
                eVar = null;
                break;
            case 0:
            default:
                throw new rr.p();
            case 1:
                if (config.getStyles() != null) {
                    final up.e c11 = up.e.c(uiComponentHelper.b());
                    c11.f51757b.setAnimation(sp.o.f49989k);
                    uiComponentHelper.d(new Function0() { // from class: gq.l2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit P;
                            P = w3.P(up.e.this, config);
                            return P;
                        }
                    });
                    Intrinsics.checkNotNull(c11);
                    eVar = c11;
                    break;
                } else {
                    c10 = up.f.c(uiComponentHelper.b());
                    c10.f51759b.setImageResource(sp.l.f49954p);
                    uiComponentHelper.d(new Function0() { // from class: gq.n2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit c02;
                            c02 = w3.c0(up.f.this, dimension);
                            return c02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 2:
                if (config.getStyles() != null) {
                    final up.e c12 = up.e.c(uiComponentHelper.b());
                    c12.f51757b.setAnimation(sp.o.f49980b);
                    uiComponentHelper.d(new Function0() { // from class: gq.z2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit n02;
                            n02 = w3.n0(up.e.this, config);
                            return n02;
                        }
                    });
                    Intrinsics.checkNotNull(c12);
                    eVar = c12;
                    break;
                } else {
                    c10 = up.f.c(uiComponentHelper.b());
                    c10.f51759b.setImageResource(sp.l.f49949k);
                    uiComponentHelper.d(new Function0() { // from class: gq.f3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit x02;
                            x02 = w3.x0(up.f.this, dimension);
                            return x02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 3:
                final up.e c13 = up.e.c(uiComponentHelper.b());
                c13.f51757b.setAnimation(sp.o.f49990l);
                uiComponentHelper.d(new Function0() { // from class: gq.g3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit Q;
                        Q = w3.Q(up.e.this);
                        return Q;
                    }
                });
                c13.f51757b.j(new l5.a0() { // from class: gq.i3
                    @Override // l5.a0
                    public final void a(l5.i iVar) {
                        w3.R(up.e.this, iVar);
                    }
                });
                eVar = c13;
                break;
            case 4:
                if (config.getStyles() != null) {
                    final up.e c14 = up.e.c(uiComponentHelper.b());
                    c14.f51757b.setAnimation(sp.o.f49988j);
                    uiComponentHelper.d(new Function0() { // from class: gq.j3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit S;
                            S = w3.S(up.e.this, config);
                            return S;
                        }
                    });
                    Intrinsics.checkNotNull(c14);
                    eVar = c14;
                    break;
                } else {
                    final up.f c15 = up.f.c(uiComponentHelper.b());
                    c15.f51759b.setImageResource(sp.l.f49953o);
                    uiComponentHelper.d(new Function0() { // from class: gq.k3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit T;
                            T = w3.T(up.f.this, dimension2);
                            return T;
                        }
                    });
                    Intrinsics.checkNotNull(c15);
                    eVar = c15;
                    break;
                }
            case 5:
                if (config.getStyles() != null) {
                    final up.e c16 = up.e.c(uiComponentHelper.b());
                    c16.f51757b.setAnimation(sp.o.f49987i);
                    uiComponentHelper.d(new Function0() { // from class: gq.l3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit U;
                            U = w3.U(up.e.this, config);
                            return U;
                        }
                    });
                    Intrinsics.checkNotNull(c16);
                    eVar = c16;
                    break;
                } else {
                    final up.f c17 = up.f.c(uiComponentHelper.b());
                    c17.f51759b.setImageResource(sp.l.f49952n);
                    uiComponentHelper.d(new Function0() { // from class: gq.m3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit V;
                            V = w3.V(up.f.this, dimension2);
                            return V;
                        }
                    });
                    Intrinsics.checkNotNull(c17);
                    eVar = c17;
                    break;
                }
            case 6:
                if (config.getStyles() != null) {
                    final up.e c18 = up.e.c(uiComponentHelper.b());
                    c18.f51757b.setAnimation(sp.o.f49986h);
                    uiComponentHelper.d(new Function0() { // from class: gq.w2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit W;
                            W = w3.W(up.e.this, config);
                            return W;
                        }
                    });
                    Intrinsics.checkNotNull(c18);
                    eVar = c18;
                    break;
                } else {
                    final up.f c19 = up.f.c(uiComponentHelper.b());
                    c19.f51759b.setImageResource(sp.l.f49951m);
                    uiComponentHelper.d(new Function0() { // from class: gq.h3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit X;
                            X = w3.X(up.f.this, dimension2);
                            return X;
                        }
                    });
                    Intrinsics.checkNotNull(c19);
                    eVar = c19;
                    break;
                }
            case 7:
                if (config.getStyles() != null) {
                    final up.e c20 = up.e.c(uiComponentHelper.b());
                    c20.f51757b.setAnimation(sp.o.f50004z);
                    uiComponentHelper.d(new Function0() { // from class: gq.p3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit Y;
                            Y = w3.Y(up.e.this, config);
                            return Y;
                        }
                    });
                    Intrinsics.checkNotNull(c20);
                    eVar = c20;
                    break;
                } else {
                    final up.f c21 = up.f.c(uiComponentHelper.b());
                    c21.f51759b.setImageResource(sp.l.f49956r);
                    uiComponentHelper.d(new Function0() { // from class: gq.q3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit Z;
                            Z = w3.Z(up.f.this, dimension2);
                            return Z;
                        }
                    });
                    Intrinsics.checkNotNull(c21);
                    eVar = c21;
                    break;
                }
            case 8:
                if (config.getStyles() != null) {
                    final up.e c22 = up.e.c(uiComponentHelper.b());
                    c22.f51757b.setAnimation(sp.o.f49979a);
                    uiComponentHelper.d(new Function0() { // from class: gq.r3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit a02;
                            a02 = w3.a0(up.e.this, config);
                            return a02;
                        }
                    });
                    Intrinsics.checkNotNull(c22);
                    eVar = c22;
                    break;
                } else {
                    c10 = up.f.c(uiComponentHelper.b());
                    c10.f51759b.setImageResource(sp.l.f49948j);
                    uiComponentHelper.d(new Function0() { // from class: gq.s3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit b02;
                            b02 = w3.b0(up.f.this, dimension);
                            return b02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 9:
                if (config.getStyles() != null) {
                    final up.e c23 = up.e.c(uiComponentHelper.b());
                    c23.f51757b.setAnimation(sp.o.f50003y);
                    uiComponentHelper.d(new Function0() { // from class: gq.t3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit d02;
                            d02 = w3.d0(up.e.this, config);
                            return d02;
                        }
                    });
                    Intrinsics.checkNotNull(c23);
                    eVar = c23;
                    break;
                } else {
                    c10 = up.f.c(uiComponentHelper.b());
                    c10.f51759b.setImageResource(sp.l.f49955q);
                    uiComponentHelper.d(new Function0() { // from class: gq.u3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit e02;
                            e02 = w3.e0(up.f.this, dimension);
                            return e02;
                        }
                    });
                    Intrinsics.checkNotNull(c10);
                    eVar = c10;
                    break;
                }
            case 10:
                final up.e c24 = up.e.c(uiComponentHelper.b());
                c24.f51757b.setAnimation(sp.o.f50001w);
                c24.f51757b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: gq.v3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit f02;
                            f02 = w3.f0(up.e.this, config);
                            return f02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView = c24.f51757b;
                    Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
                    lq.g.g(lottieView, Integer.valueOf(sp.s.d(a10, bh.b.f6639m, null, false, 6, null)), Integer.valueOf(sp.s.d(a10, bh.b.f6640n, null, false, 6, null)), null, new String[]{"#190052"}, new String[]{"#F1EBFF", "#8552FF"}, new String[]{"#FFFFFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: gq.m2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit g02;
                        g02 = w3.g0(up.e.this);
                        return g02;
                    }
                });
                eVar = c24;
                break;
            case 11:
                final up.e c25 = up.e.c(uiComponentHelper.b());
                c25.f51757b.setAnimation(sp.o.f50002x);
                uiComponentHelper.d(new Function0() { // from class: gq.o2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit h02;
                        h02 = w3.h0(up.e.this);
                        return h02;
                    }
                });
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: gq.p2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit i02;
                            i02 = w3.i0(up.e.this, config);
                            return i02;
                        }
                    });
                    eVar = c25;
                    break;
                } else {
                    ThemeableLottieAnimationView lottieView2 = c25.f51757b;
                    Intrinsics.checkNotNullExpressionValue(lottieView2, "lottieView");
                    lq.g.g(lottieView2, Integer.valueOf(sp.s.d(a10, bh.b.f6639m, null, false, 6, null)), Integer.valueOf(sp.s.d(a10, bh.b.f6640n, null, false, 6, null)), null, new String[]{"#02214F", "#190051"}, new String[]{"#E5E5EA"}, new String[0]);
                    eVar = c25;
                    break;
                }
            case 12:
                final up.e c26 = up.e.c(uiComponentHelper.b());
                c26.f51757b.setAnimation(sp.o.f50000v);
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: gq.q2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit j02;
                            j02 = w3.j0(up.e.this, config);
                            return j02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView3 = c26.f51757b;
                    Intrinsics.checkNotNullExpressionValue(lottieView3, "lottieView");
                    lq.g.g(lottieView3, Integer.valueOf(sp.s.d(a10, bh.b.f6639m, null, false, 6, null)), null, null, new String[]{"#280087"}, new String[0], new String[0]);
                }
                uiComponentHelper.d(new Function0() { // from class: gq.r2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit k02;
                        k02 = w3.k0(up.e.this);
                        return k02;
                    }
                });
                eVar = c26;
                break;
            case 13:
                final up.e c27 = up.e.c(uiComponentHelper.b());
                c27.f51757b.setAnimation(sp.o.f49981c);
                c27.f51757b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: gq.s2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit l02;
                            l02 = w3.l0(up.e.this, config);
                            return l02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView4 = c27.f51757b;
                    Intrinsics.checkNotNullExpressionValue(lottieView4, "lottieView");
                    lq.g.g(lottieView4, Integer.valueOf(sp.s.d(a10, bh.b.f6639m, null, false, 6, null)), Integer.valueOf(sp.s.d(a10, bh.b.f6640n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: gq.t2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit m02;
                        m02 = w3.m0(up.e.this);
                        return m02;
                    }
                });
                eVar = c27;
                break;
            case 14:
                final up.e c28 = up.e.c(uiComponentHelper.b());
                c28.f51757b.setAnimation(sp.o.f49983e);
                c28.f51757b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: gq.u2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit o02;
                            o02 = w3.o0(up.e.this, config);
                            return o02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView5 = c28.f51757b;
                    Intrinsics.checkNotNullExpressionValue(lottieView5, "lottieView");
                    lq.g.g(lottieView5, Integer.valueOf(sp.s.d(a10, bh.b.f6639m, null, false, 6, null)), Integer.valueOf(sp.s.d(a10, bh.b.f6640n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: gq.v2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit p02;
                        p02 = w3.p0(up.e.this);
                        return p02;
                    }
                });
                eVar = c28;
                break;
            case 15:
                final up.e c29 = up.e.c(uiComponentHelper.b());
                c29.f51757b.setAnimation(sp.o.f49985g);
                c29.f51757b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: gq.x2
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit q02;
                            q02 = w3.q0(up.e.this, config);
                            return q02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView6 = c29.f51757b;
                    Intrinsics.checkNotNullExpressionValue(lottieView6, "lottieView");
                    lq.g.g(lottieView6, Integer.valueOf(sp.s.d(a10, bh.b.f6639m, null, false, 6, null)), Integer.valueOf(sp.s.d(a10, bh.b.f6640n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: gq.y2
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit r02;
                        r02 = w3.r0(up.e.this);
                        return r02;
                    }
                });
                eVar = c29;
                break;
            case 16:
                final up.e c30 = up.e.c(uiComponentHelper.b());
                c30.f51757b.setAnimation(sp.o.f49984f);
                c30.f51757b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: gq.a3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit s02;
                            s02 = w3.s0(up.e.this, config);
                            return s02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView7 = c30.f51757b;
                    Intrinsics.checkNotNullExpressionValue(lottieView7, "lottieView");
                    lq.g.g(lottieView7, Integer.valueOf(sp.s.d(a10, bh.b.f6639m, null, false, 6, null)), Integer.valueOf(sp.s.d(a10, bh.b.f6640n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: gq.b3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit t02;
                        t02 = w3.t0(up.e.this);
                        return t02;
                    }
                });
                eVar = c30;
                break;
            case 17:
                final up.e c31 = up.e.c(uiComponentHelper.b());
                c31.f51757b.setAnimation(sp.o.f49982d);
                c31.f51757b.playAnimation();
                if (config.getStyles() != null) {
                    uiComponentHelper.d(new Function0() { // from class: gq.c3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit u02;
                            u02 = w3.u0(up.e.this, config);
                            return u02;
                        }
                    });
                } else {
                    ThemeableLottieAnimationView lottieView8 = c31.f51757b;
                    Intrinsics.checkNotNullExpressionValue(lottieView8, "lottieView");
                    lq.g.g(lottieView8, Integer.valueOf(sp.s.d(a10, bh.b.f6639m, null, false, 6, null)), Integer.valueOf(sp.s.d(a10, bh.b.f6640n, null, false, 6, null)), null, new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
                }
                uiComponentHelper.d(new Function0() { // from class: gq.d3
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit v02;
                        v02 = w3.v0(up.e.this);
                        return v02;
                    }
                });
                eVar = c31;
                break;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                final up.e c32 = up.e.c(uiComponentHelper.b());
                c32.f51757b.setImageResource(eq.d.f21967a);
                if (config.getStyles() != null) {
                    ThemeableLottieAnimationView lottieView9 = c32.f51757b;
                    Intrinsics.checkNotNullExpressionValue(lottieView9, "lottieView");
                    lq.g.c(lottieView9, config.getStyles(), new String[0], new String[0], new String[0]);
                    eVar = c32;
                    break;
                } else {
                    uiComponentHelper.d(new Function0() { // from class: gq.e3
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit w02;
                            w02 = w3.w0(up.e.this);
                            return w02;
                        }
                    });
                    eVar = c32;
                    break;
                }
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                eVar = L(k2Var, uiComponentHelper, sp.o.f49991m, sp.l.f49939a, new String[0], new String[0], config);
                break;
            case 20:
                eVar = L(k2Var, uiComponentHelper, sp.o.f49992n, sp.l.f49940b, new String[]{"#000000"}, new String[0], config);
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                eVar = L(k2Var, uiComponentHelper, sp.o.f49993o, sp.l.f49941c, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                eVar = L(k2Var, uiComponentHelper, sp.o.f49994p, sp.l.f49942d, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case 23:
                eVar = L(k2Var, uiComponentHelper, sp.o.f49995q, sp.l.f49943e, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                eVar = L(k2Var, uiComponentHelper, sp.o.f49996r, sp.l.f49944f, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                eVar = L(k2Var, uiComponentHelper, sp.o.f49997s, sp.l.f49945g, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                eVar = L(k2Var, uiComponentHelper, sp.o.f49998t, sp.l.f49946h, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case 27:
                eVar = L(k2Var, uiComponentHelper, sp.o.f49999u, sp.l.f49947i, new String[]{"#FFFFFF"}, new String[]{"#000000"}, config);
                break;
            case 28:
                up.e c33 = up.e.c(uiComponentHelper.b());
                c33.f51757b.setImageResource(eq.d.f21971e);
                eVar = c33;
                if (config.getStyles() != null) {
                    ThemeableLottieAnimationView lottieView10 = c33.f51757b;
                    Intrinsics.checkNotNullExpressionValue(lottieView10, "lottieView");
                    lq.g.c(lottieView10, config.getStyles(), new String[0], new String[0], new String[0]);
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
    public static final Unit P(up.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), new String[]{"#02214F"}, new String[]{"#AA84FF", "#F2EAFF"}, new String[]{"#FFFFFF"});
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q(up.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ((ConstraintLayout.LayoutParams) layoutParams).V = 0.5f;
            }
            lottieView.setLayoutParams(layoutParams);
            return Unit.f31765a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void R(up.e eVar, l5.i iVar) {
        eVar.f51757b.playAnimation();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S(up.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), new String[]{"#02214F"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T(up.f fVar, int i10) {
        ImageView imageView = fVar.f51759b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31765a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U(up.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(up.f fVar, int i10) {
        ImageView imageView = fVar.f51759b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31765a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W(up.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X(up.f fVar, int i10) {
        ImageView imageView = fVar.f51759b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31765a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y(up.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(up.f fVar, int i10) {
        ImageView imageView = fVar.f51759b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31765a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a0(up.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), new String[]{"#4C4293"}, new String[]{"#B5B5CC"}, new String[0]);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b0(up.f fVar, int i10) {
        ImageView imageView = fVar.f51759b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31765a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c0(up.f fVar, int i10) {
        ImageView imageView = fVar.f51759b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31765a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d0(up.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051", "#02214F"}, new String[]{"#AA84FF"}, new String[]{"#AA84FF"});
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e0(up.f fVar, int i10) {
        ImageView imageView = fVar.f51759b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31765a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f0(up.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), new String[]{"#190052"}, new String[]{"#F1EBFF", "#8552FF"}, new String[]{"#FFFFFF"});
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g0(up.e eVar) {
        eVar.f51757b.setRepeatMode(1);
        eVar.f51757b.setRepeatCount(-1);
        eVar.f51757b.playAnimation();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h0(up.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ((ConstraintLayout.LayoutParams) layoutParams).V = 0.5f;
            }
            lottieView.setLayoutParams(layoutParams);
            return Unit.f31765a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i0(up.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), new String[]{"#02214F", "#190051"}, new String[]{"#E5E5EA"}, new String[0]);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(up.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087"}, new String[0], new String[0]);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(up.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            if (layoutParams instanceof ConstraintLayout.LayoutParams) {
                ((ConstraintLayout.LayoutParams) layoutParams).V = 0.5f;
            }
            lottieView.setLayoutParams(layoutParams);
            return Unit.f31765a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(up.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m0(up.e eVar) {
        eVar.f51757b.setRepeatMode(1);
        eVar.f51757b.setRepeatCount(-1);
        eVar.f51757b.playAnimation();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(up.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), new String[]{"#190051"}, new String[]{"#AA84FF", "#F2EAFF"}, new String[]{"#FFFFFF"});
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(up.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0(up.e eVar) {
        eVar.f51757b.setRepeatMode(1);
        eVar.f51757b.setRepeatCount(-1);
        eVar.f51757b.playAnimation();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0(up.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r0(up.e eVar) {
        eVar.f51757b.setRepeatMode(1);
        eVar.f51757b.setRepeatCount(-1);
        eVar.f51757b.playAnimation();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s0(up.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t0(up.e eVar) {
        eVar.f51757b.setRepeatMode(1);
        eVar.f51757b.setRepeatCount(-1);
        eVar.f51757b.playAnimation();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u0(up.e eVar, LocalImage localImage) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        lq.g.c(lottieView, localImage.getStyles(), new String[]{"#280087", "#322A7E"}, new String[]{"#CBB1FF"}, new String[]{"#F1EBFF"});
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v0(up.e eVar) {
        eVar.f51757b.setRepeatMode(1);
        eVar.f51757b.setRepeatCount(-1);
        eVar.f51757b.playAnimation();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(up.e eVar) {
        ThemeableLottieAnimationView lottieView = eVar.f51757b;
        Intrinsics.checkNotNullExpressionValue(lottieView, "lottieView");
        ViewGroup.LayoutParams layoutParams = lottieView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = (int) sp.h.a(44.0d);
            lottieView.setLayoutParams(layoutParams);
            return Unit.f31765a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x0(up.f fVar, int i10) {
        ImageView imageView = fVar.f51759b;
        Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.height = i10;
            imageView.setLayoutParams(layoutParams);
            return Unit.f31765a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }
}
