package zd;

import com.google.android.exoplayer2.Format;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface j {

    /* renamed from: a  reason: collision with root package name */
    public static final j f55501a = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements j {
        a() {
        }

        @Override // zd.j
        public boolean a(Format format) {
            String str = format.f11688w;
            if (!"text/vtt".equals(str) && !"text/x-ssa".equals(str) && !"application/ttml+xml".equals(str) && !"application/x-mp4-vtt".equals(str) && !"application/x-subrip".equals(str) && !"application/x-quicktime-tx3g".equals(str) && !"application/cea-608".equals(str) && !"application/x-mp4-cea-608".equals(str) && !"application/cea-708".equals(str) && !"application/dvbsubs".equals(str) && !"application/pgs".equals(str) && !"text/x-exoplayer-cues".equals(str)) {
                return false;
            }
            return true;
        }

        @Override // zd.j
        public h b(Format format) {
            String str = format.f11688w;
            if (str != null) {
                char c10 = 65535;
                switch (str.hashCode()) {
                    case -1351681404:
                        if (str.equals("application/dvbsubs")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1248334819:
                        if (str.equals("application/pgs")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1026075066:
                        if (str.equals("application/x-mp4-vtt")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -1004728940:
                        if (str.equals("text/vtt")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 691401887:
                        if (str.equals("application/x-quicktime-tx3g")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 822864842:
                        if (str.equals("text/x-ssa")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 930165504:
                        if (str.equals("application/x-mp4-cea-608")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 1201784583:
                        if (str.equals("text/x-exoplayer-cues")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 1566015601:
                        if (str.equals("application/cea-608")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                    case 1566016562:
                        if (str.equals("application/cea-708")) {
                            c10 = '\t';
                            break;
                        }
                        break;
                    case 1668750253:
                        if (str.equals("application/x-subrip")) {
                            c10 = '\n';
                            break;
                        }
                        break;
                    case 1693976202:
                        if (str.equals("application/ttml+xml")) {
                            c10 = 11;
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        return new be.a(format.f11690y);
                    case 1:
                        return new ce.a();
                    case 2:
                        return new ie.a();
                    case 3:
                        return new ie.h();
                    case 4:
                        return new he.a(format.f11690y);
                    case 5:
                        return new ee.a(format.f11690y);
                    case 6:
                    case '\b':
                        return new ae.a(str, format.O, 16000L);
                    case 7:
                        return new e();
                    case '\t':
                        return new ae.c(format.O, format.f11690y);
                    case '\n':
                        return new fe.a();
                    case 11:
                        return new ge.c();
                }
            }
            throw new IllegalArgumentException("Attempted to create decoder for unsupported MIME type: " + str);
        }
    }

    boolean a(Format format);

    h b(Format format);
}
