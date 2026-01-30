package bd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import com.reactnativecommunity.clipboard.ClipboardModule;
import ji.s;
import ne.h0;
import ne.y;
import tc.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class h {

    /* renamed from: a  reason: collision with root package name */
    static final String[] f7366a = {"Blues", "Classic Rock", "Country", "Dance", "Disco", "Funk", "Grunge", "Hip-Hop", "Jazz", "Metal", "New Age", "Oldies", "Other", "Pop", "R&B", "Rap", "Reggae", "Rock", "Techno", "Industrial", "Alternative", "Ska", "Death Metal", "Pranks", "Soundtrack", "Euro-Techno", "Ambient", "Trip-Hop", "Vocal", "Jazz+Funk", "Fusion", "Trance", "Classical", "Instrumental", "Acid", "House", "Game", "Sound Clip", "Gospel", "Noise", "AlternRock", "Bass", "Soul", "Punk", "Space", "Meditative", "Instrumental Pop", "Instrumental Rock", "Ethnic", "Gothic", "Darkwave", "Techno-Industrial", "Electronic", "Pop-Folk", "Eurodance", "Dream", "Southern Rock", "Comedy", "Cult", "Gangsta", "Top 40", "Christian Rap", "Pop/Funk", "Jungle", "Native American", "Cabaret", "New Wave", "Psychadelic", "Rave", "Showtunes", "Trailer", "Lo-Fi", "Tribal", "Acid Punk", "Acid Jazz", "Polka", "Retro", "Musical", "Rock & Roll", "Hard Rock", "Folk", "Folk-Rock", "National Folk", "Swing", "Fast Fusion", "Bebob", "Latin", "Revival", "Celtic", "Bluegrass", "Avantgarde", "Gothic Rock", "Progressive Rock", "Psychedelic Rock", "Symphonic Rock", "Slow Rock", "Big Band", "Chorus", "Easy Listening", "Acoustic", "Humour", "Speech", "Chanson", "Opera", "Chamber Music", "Sonata", "Symphony", "Booty Bass", "Primus", "Porn Groove", "Satire", "Slow Jam", "Club", "Tango", "Samba", "Folklore", "Ballad", "Power Ballad", "Rhythmic Soul", "Freestyle", "Duet", "Punk Rock", "Drum Solo", "A capella", "Euro-House", "Dance Hall", "Goa", "Drum & Bass", "Club-House", "Hardcore", "Terror", "Indie", "BritPop", "Afro-Punk", "Polsk Punk", "Beat", "Christian Gangsta Rap", "Heavy Metal", "Black Metal", "Crossover", "Contemporary Christian", "Christian Rock", "Merengue", "Salsa", "Thrash Metal", "Anime", "Jpop", "Synthpop", "Abstract", "Art Rock", "Baroque", "Bhangra", "Big beat", "Breakbeat", "Chillout", "Downtempo", "Dub", "EBM", "Eclectic", "Electro", "Electroclash", "Emo", "Experimental", "Garage", "Global", "IDM", "Illbient", "Industro-Goth", "Jam Band", "Krautrock", "Leftfield", "Lounge", "Math Rock", "New Romantic", "Nu-Breakz", "Post-Punk", "Post-Rock", "Psytrance", "Shoegaze", "Space Rock", "Trop Rock", "World Music", "Neoclassical", "Audiobook", "Audio theatre", "Neue Deutsche Welle", "Podcast", "Indie-Rock", "G-Funk", "Dubstep", "Garage Rock", "Psybient"};

    private static ld.e a(int i10, h0 h0Var) {
        int q10 = h0Var.q();
        if (h0Var.q() == 1684108385) {
            h0Var.V(8);
            String C = h0Var.C(q10 - 16);
            return new ld.e("und", C, C);
        }
        y.i("MetadataUtil", "Failed to parse comment attribute: " + a.a(i10));
        return null;
    }

    private static ld.a b(h0 h0Var) {
        String str;
        int q10 = h0Var.q();
        if (h0Var.q() == 1684108385) {
            int b10 = a.b(h0Var.q());
            if (b10 == 13) {
                str = ClipboardModule.MIMETYPE_JPEG;
            } else if (b10 == 14) {
                str = ClipboardModule.MIMETYPE_PNG;
            } else {
                str = null;
            }
            if (str == null) {
                y.i("MetadataUtil", "Unrecognized cover art flags: " + b10);
                return null;
            }
            h0Var.V(4);
            int i10 = q10 - 16;
            byte[] bArr = new byte[i10];
            h0Var.l(bArr, 0, i10);
            return new ld.a(str, null, 3, bArr);
        }
        y.i("MetadataUtil", "Failed to parse cover art attribute");
        return null;
    }

    public static Metadata.b c(h0 h0Var) {
        int f10 = h0Var.f() + h0Var.q();
        int q10 = h0Var.q();
        int i10 = (q10 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY;
        try {
            if (i10 != 169 && i10 != 253) {
                if (q10 == 1735291493) {
                    return g(h0Var);
                }
                if (q10 == 1684632427) {
                    return d(q10, "TPOS", h0Var);
                }
                if (q10 == 1953655662) {
                    return d(q10, "TRCK", h0Var);
                }
                if (q10 == 1953329263) {
                    return i(q10, "TBPM", h0Var, true, false);
                }
                if (q10 == 1668311404) {
                    return i(q10, "TCMP", h0Var, true, true);
                }
                if (q10 == 1668249202) {
                    return b(h0Var);
                }
                if (q10 == 1631670868) {
                    return h(q10, "TPE2", h0Var);
                }
                if (q10 == 1936682605) {
                    return h(q10, "TSOT", h0Var);
                }
                if (q10 == 1936679276) {
                    return h(q10, "TSO2", h0Var);
                }
                if (q10 == 1936679282) {
                    return h(q10, "TSOA", h0Var);
                }
                if (q10 == 1936679265) {
                    return h(q10, "TSOP", h0Var);
                }
                if (q10 == 1936679791) {
                    return h(q10, "TSOC", h0Var);
                }
                if (q10 == 1920233063) {
                    return i(q10, "ITUNESADVISORY", h0Var, false, false);
                }
                if (q10 == 1885823344) {
                    return i(q10, "ITUNESGAPLESS", h0Var, false, true);
                }
                if (q10 == 1936683886) {
                    return h(q10, "TVSHOWSORT", h0Var);
                }
                if (q10 == 1953919848) {
                    return h(q10, "TVSHOW", h0Var);
                }
                if (q10 == 757935405) {
                    return e(h0Var, f10);
                }
            } else {
                int i11 = 16777215 & q10;
                if (i11 == 6516084) {
                    return a(q10, h0Var);
                }
                if (i11 != 7233901 && i11 != 7631467) {
                    if (i11 != 6516589 && i11 != 7828084) {
                        if (i11 == 6578553) {
                            return h(q10, "TDRC", h0Var);
                        }
                        if (i11 == 4280916) {
                            return h(q10, "TPE1", h0Var);
                        }
                        if (i11 == 7630703) {
                            return h(q10, "TSSE", h0Var);
                        }
                        if (i11 == 6384738) {
                            return h(q10, "TALB", h0Var);
                        }
                        if (i11 == 7108978) {
                            return h(q10, "USLT", h0Var);
                        }
                        if (i11 == 6776174) {
                            return h(q10, "TCON", h0Var);
                        }
                        if (i11 == 6779504) {
                            return h(q10, "TIT1", h0Var);
                        }
                    } else {
                        return h(q10, "TCOM", h0Var);
                    }
                } else {
                    return h(q10, "TIT2", h0Var);
                }
            }
            y.b("MetadataUtil", "Skipped unknown metadata entry: " + a.a(q10));
            h0Var.U(f10);
            return null;
        } finally {
            h0Var.U(f10);
        }
    }

    private static ld.m d(int i10, String str, h0 h0Var) {
        int q10 = h0Var.q();
        if (h0Var.q() == 1684108385 && q10 >= 22) {
            h0Var.V(10);
            int N = h0Var.N();
            if (N > 0) {
                String str2 = "" + N;
                int N2 = h0Var.N();
                if (N2 > 0) {
                    str2 = str2 + "/" + N2;
                }
                return new ld.m(str, null, s.s(str2));
            }
        }
        y.i("MetadataUtil", "Failed to parse index/count attribute: " + a.a(i10));
        return null;
    }

    private static ld.i e(h0 h0Var, int i10) {
        String str = null;
        String str2 = null;
        int i11 = -1;
        int i12 = -1;
        while (h0Var.f() < i10) {
            int f10 = h0Var.f();
            int q10 = h0Var.q();
            int q11 = h0Var.q();
            h0Var.V(4);
            if (q11 == 1835360622) {
                str = h0Var.C(q10 - 12);
            } else if (q11 == 1851878757) {
                str2 = h0Var.C(q10 - 12);
            } else {
                if (q11 == 1684108385) {
                    i11 = f10;
                    i12 = q10;
                }
                h0Var.V(q10 - 12);
            }
        }
        if (str == null || str2 == null || i11 == -1) {
            return null;
        }
        h0Var.U(i11);
        h0Var.V(16);
        return new ld.j(str, str2, h0Var.C(i12 - 16));
    }

    public static md.a f(h0 h0Var, int i10, String str) {
        while (true) {
            int f10 = h0Var.f();
            if (f10 < i10) {
                int q10 = h0Var.q();
                if (h0Var.q() == 1684108385) {
                    int q11 = h0Var.q();
                    int q12 = h0Var.q();
                    int i11 = q10 - 16;
                    byte[] bArr = new byte[i11];
                    h0Var.l(bArr, 0, i11);
                    return new md.a(str, bArr, q12, q11);
                }
                h0Var.U(f10 + q10);
            } else {
                return null;
            }
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:11:0x0020  */
    /* JADX WARN: Removed duplicated region for block: B:9:0x0014  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static ld.m g(ne.h0 r3) {
        /*
            int r3 = j(r3)
            r0 = 0
            if (r3 <= 0) goto L11
            java.lang.String[] r1 = bd.h.f7366a
            int r2 = r1.length
            if (r3 > r2) goto L11
            int r3 = r3 + (-1)
            r3 = r1[r3]
            goto L12
        L11:
            r3 = r0
        L12:
            if (r3 == 0) goto L20
            ld.m r1 = new ld.m
            java.lang.String r2 = "TCON"
            ji.s r3 = ji.s.s(r3)
            r1.<init>(r2, r0, r3)
            return r1
        L20:
            java.lang.String r3 = "MetadataUtil"
            java.lang.String r1 = "Failed to parse standard genre code"
            ne.y.i(r3, r1)
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: bd.h.g(ne.h0):ld.m");
    }

    private static ld.m h(int i10, String str, h0 h0Var) {
        int q10 = h0Var.q();
        if (h0Var.q() == 1684108385) {
            h0Var.V(8);
            return new ld.m(str, null, s.s(h0Var.C(q10 - 16)));
        }
        y.i("MetadataUtil", "Failed to parse text attribute: " + a.a(i10));
        return null;
    }

    private static ld.i i(int i10, String str, h0 h0Var, boolean z10, boolean z11) {
        int j10 = j(h0Var);
        if (z11) {
            j10 = Math.min(1, j10);
        }
        if (j10 >= 0) {
            if (z10) {
                return new ld.m(str, null, s.s(Integer.toString(j10)));
            }
            return new ld.e("und", str, Integer.toString(j10));
        }
        y.i("MetadataUtil", "Failed to parse uint8 attribute: " + a.a(i10));
        return null;
    }

    private static int j(h0 h0Var) {
        h0Var.V(4);
        if (h0Var.q() == 1684108385) {
            h0Var.V(8);
            return h0Var.H();
        }
        y.i("MetadataUtil", "Failed to parse uint8 attribute value");
        return -1;
    }

    public static void k(int i10, v vVar, Format.b bVar) {
        if (i10 == 1 && vVar.a()) {
            bVar.P(vVar.f49511a).Q(vVar.f49512b);
        }
    }

    public static void l(int i10, Metadata metadata, Metadata metadata2, Format.b bVar, Metadata... metadataArr) {
        Metadata metadata3 = new Metadata(new Metadata.b[0]);
        if (i10 != 1 || metadata == null) {
            metadata = metadata3;
        }
        if (metadata2 != null) {
            for (int i11 = 0; i11 < metadata2.e(); i11++) {
                Metadata.b d10 = metadata2.d(i11);
                if (d10 instanceof md.a) {
                    md.a aVar = (md.a) d10;
                    if (aVar.f38028d.equals("com.android.capture.fps")) {
                        if (i10 == 2) {
                            metadata = metadata.a(aVar);
                        }
                    } else {
                        metadata = metadata.a(aVar);
                    }
                }
            }
        }
        for (Metadata metadata4 : metadataArr) {
            metadata = metadata.b(metadata4);
        }
        if (metadata.e() > 0) {
            bVar.Z(metadata);
        }
    }
}
